export interface IWorkerFactory {
  createWorker(url: URL): Worker;
}
