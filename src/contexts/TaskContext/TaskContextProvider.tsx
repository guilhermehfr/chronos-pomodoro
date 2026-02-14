import { useReducer, useEffect, useRef } from 'react';

import { TaskActionType } from '../../contexts/TaskContext/taskActions';

import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

import { BrowserWorkerFactory } from '../../services/BrowserWorkerFactory';
import { TimerWorkerManager } from '../../services/TimerWorkerManager';
import { loadBeep } from '../../utils/loadBeep';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

const factory = new BrowserWorkerFactory();
const workerManager = new TimerWorkerManager(factory);
const url = new URL('../../workers/timerWorker.js', import.meta.url);

export function TaskContextProvider({
  children,
}: Record<string, React.ReactNode>) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  useEffect(() => {
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

        document.title = 'Chronos Pomodoro';

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
      document.title = 'Chronos Pomodoro';
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
