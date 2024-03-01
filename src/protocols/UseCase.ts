export interface UseCase<T, V = undefined> {
  handle: (args?: V) => Maybe<T>;
}
