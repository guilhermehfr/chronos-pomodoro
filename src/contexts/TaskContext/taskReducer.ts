import type { TaskStateModel } from '../../models/TaskStateModel';
import { type TaskActionModel, TaskActionType } from './taskActions';

import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionType.START_TASK: {
      const newTask = action.payload;
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        activeTask: newTask,
        currentCycle: getNextCycle(state.currentCycle),
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      };
    }

    case TaskActionType.INTERRUPT_TASK: {
      return {
        ...state,

        tasks: state.tasks.map(task => {
          return task.id === state.activeTask?.id
            ? { ...task, interruptDate: Date.now() }
            : task;
        }),

        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    }

    case TaskActionType.RESET_STATE: {
      return { ...state };
    }
  }
}
