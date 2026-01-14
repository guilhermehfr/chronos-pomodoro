import type { TaskStateModel } from '../../models/TaskStateModel';
import { createContext } from 'react';
import { initialTaskState } from './initialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialTaskState,
  setState: () => {},
});
