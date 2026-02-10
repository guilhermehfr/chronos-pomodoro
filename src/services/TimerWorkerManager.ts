import type { TaskStateModel } from '../models/TaskStateModel';
import type { IWorkerFactory } from '../interfaces/IWorkerFactory';
import type { ITimerWorkerManager } from '../interfaces/ITimerWorkerManager';

export class TimerWorkerManager implements ITimerWorkerManager {
  public browserWorkerFactory: IWorkerFactory;
  public worker: Worker | null = null;

  constructor(browserWorkerFactory: IWorkerFactory) {
    this.browserWorkerFactory = browserWorkerFactory;
  }

  createWorker(url: URL) {
    if (this.worker) return;
    this.worker = this.browserWorkerFactory.createWorker(url);
  }

  postMessage(state: TaskStateModel): void {
    this.worker?.postMessage(state);
  }

  onmessage(cb: (e: MessageEvent) => void): void {
    if (this.worker) {
      this.worker.onmessage = cb;
    }
  }

  terminate(): void {
    this.worker?.terminate();
    this.worker = null;
  }
}
