import type { TaskStateModel } from '../../models/TaskStateModel';
import { type TaskActionModel, TaskActionType } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionType.INTERRUPT_TASK: {
      return { ...state };
    }
    case TaskActionType.START_TASK: {
      return { ...state };
    }
    case TaskActionType.RESET_STATE: {
      return { ...state };
    }
  }

  return state;
}
