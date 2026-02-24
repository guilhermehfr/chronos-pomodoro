import { useReducer, useEffect, useRef } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';

import { TaskActionType } from '../../contexts/TaskContext/taskActions';

import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

import { BrowserWorkerFactory } from '../../services/BrowserWorkerFactory';
import { TimerWorkerManager } from '../../services/TimerWorkerManager';

import { loadBeep } from '../../utils/loadBeep';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getTaskState, setTaskState } from '../../utils/safeStorage';

const factory = new BrowserWorkerFactory();
const workerManager = new TimerWorkerManager(factory);

export function TaskContextProvider({
  children,
}: Record<string, React.ReactNode>) {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialTaskState,
    (initialState: TaskStateModel): TaskStateModel => {
      return getTaskState(initialState);
    },
  );
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  useEffect(() => {
    setTaskState(state);

    const url = new URL('../../workers/timerWorker.js', import.meta.url);
    if (!workerManager.worker) workerManager.createWorker(url);

    if (!state.activeTask) workerManager.terminate();

    workerManager.postMessage(state);

    workerManager.onmessage((e: MessageEvent) => {
      const countdownSeconds: number = e.data;
      document.title = `${formatSecondsToMinutes(countdownSeconds)} - Chronos Pomodoro`;

      if (countdownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }

        dispatch({ type: TaskActionType.COMPLETE_TASK });
        workerManager.terminate();
      } else {
        dispatch({
          type: TaskActionType.UPDATE_COUNTDOWN,
          payload: { secondsRemaining: e.data },
        });
      }
    });
  }, [state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (state.activeTask) {
        dispatch({ type: TaskActionType.INTERRUPT_TASK });

        const interruptedState: TaskStateModel = {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === state.activeTask?.id
              ? { ...task, interruptDate: Date.now() }
              : task,
          ),
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: '00:00',
        };
        setTaskState(interruptedState);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
