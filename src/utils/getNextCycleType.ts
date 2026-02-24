import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle === 8) return 'longRestTime';
  return currentCycle % 2 === 0 ? 'restTime' : 'focusTime';
}
