export interface Repository<T, V = undefined> {
  handle: (args?: V) => Promise<T>;
}
