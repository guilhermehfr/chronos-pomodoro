import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  type: keyof TaskStateModel['config'];
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
};
