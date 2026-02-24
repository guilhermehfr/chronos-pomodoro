import type { TaskModel } from '../../models/TaskModel';

export const TaskActionType = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  UPDATE_COUNTDOWN: 'UPDATE_COUNTDOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  UPDATE_TASK_DURATIONS: 'UPDATE_TASK_DURATIONS',
} as const;

export type TaskActionTypes =
  (typeof TaskActionType)[keyof typeof TaskActionType];

export type TaskActionModel =
  | {
      type: typeof TaskActionType.START_TASK;
      payload: TaskModel;
    }
  | { type: typeof TaskActionType.INTERRUPT_TASK }
  | { type: typeof TaskActionType.COMPLETE_TASK }
  | { type: typeof TaskActionType.RESET_STATE }
  | {
      type: typeof TaskActionType.UPDATE_COUNTDOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: typeof TaskActionType.UPDATE_TASK_DURATIONS;
      payload: {
        focusTime: number;
        restTime: number;
        longRestTime: number;
      };
    };
