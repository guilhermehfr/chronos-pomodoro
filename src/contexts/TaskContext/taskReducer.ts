import type { TaskStateModel } from '../../models/TaskStateModel';
import { type TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.INTERRUPT_TASK: {
      return { ...state };
    }
    case TaskActionTypes.START_TASK: {
      return { ...state };
    }
  }

  return state;
}
