import { useReducer, useEffect } from 'react';

import { TaskActionType } from '../../contexts/TaskContext/taskActions';

import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

import { BrowserWorkerFactory } from '../../services/BrowserWorkerFactory';
import { TimerWorkerManager } from '../../services/TimerWorkerManager';

const factory = new BrowserWorkerFactory();
const workerManager = new TimerWorkerManager(factory);
const url = new URL('../../workers/timerWorker.js', import.meta.url);

export function TaskContextProvider({
  children,
}: Record<string, React.ReactNode>) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    if (!workerManager.worker) workerManager.createWorker(url);

    if (!state.activeTask) workerManager.terminate();

    workerManager.postMessage(state);

    workerManager.onmessage((e: MessageEvent) => {
      const countdownSeconds: number = e.data;

      if (countdownSeconds <= 0) {
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

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
