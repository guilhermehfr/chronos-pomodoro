import type { IWorkerFactory } from '../interfaces/IWorkerFactory';

export class BrowserWorkerFactory implements IWorkerFactory {
  createWorker(url: URL): Worker {
    return new Worker(url);
  }
}
