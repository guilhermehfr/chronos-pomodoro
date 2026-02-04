import type { TaskModel } from '../../models/TaskModel';

export const TaskActionType = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

export type TaskActionTypes =
  (typeof TaskActionType)[keyof typeof TaskActionType];

export type TaskActionModel =
  | {
      type: typeof TaskActionType.START_TASK;
      payload: TaskModel;
    }
  | { type: typeof TaskActionType.INTERRUPT_TASK }
  | { type: typeof TaskActionType.RESET_STATE };
