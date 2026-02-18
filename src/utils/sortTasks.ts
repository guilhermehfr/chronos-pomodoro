import type { TaskModel } from '../models/TaskModel';

export type SortOrder = 'asc' | 'desc';
export type SortType = 'alphabetical' | 'duration' | 'date';

export function sortTasks(
  tasks: TaskModel[],
  sortType: SortType,
  order: SortOrder,
): TaskModel[] {
  const sortedTasks = [...tasks];
  const multiplier = order === 'asc' ? 1 : -1;

  switch (sortType) {
    case 'alphabetical':
      return sortedTasks.sort((a, b) => {
        return a.name.localeCompare(b.name) * multiplier;
      });

    case 'duration':
      return sortedTasks.sort((a, b) => {
        return (a.duration - b.duration) * multiplier;
      });

    case 'date':
      return sortedTasks.sort((a, b) => {
        return (a.startDate - b.startDate) * multiplier;
      });

    default:
      return sortedTasks;
  }
}
