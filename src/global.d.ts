export {};

declare global {
  type Maybe<T> = Promise<T | Error>;
}
