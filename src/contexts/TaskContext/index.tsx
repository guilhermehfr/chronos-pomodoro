import { createContext, useContext, useState } from "react";

import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialState,
  setState: () => {},
});

export function TaskContextProvider({ children }: Record<string, React.ReactNode>) {
  const [state, setState] = useState(initialState);
  
  return (
    <TaskContext.Provider value={{ state, setState}}>
      { children }
    </TaskContext.Provider>
  );
};

export function useTaskContext() {
  return useContext(TaskContext);
};