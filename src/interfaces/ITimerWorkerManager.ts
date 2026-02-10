import type { TaskStateModel } from '../models/TaskStateModel';
import type { IWorkerFactory } from './IWorkerFactory';
export interface ITimerWorkerManager {
  browserWorkerFactory: IWorkerFactory;
  worker: Worker | null;
  createWorker: (url: URL) => void;
  postMessage: (state: TaskStateModel) => void;
  onmessage: (cb: (e: MessageEvent) => void) => void;
  terminate: () => void;
}
