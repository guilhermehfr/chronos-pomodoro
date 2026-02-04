import { createContext } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';

import { initialTaskState } from './initialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.ActionDispatch<[action: TaskActionModel]>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialTaskState,
  dispatch: () => {},
});
