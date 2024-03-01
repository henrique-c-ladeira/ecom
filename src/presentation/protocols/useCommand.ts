export type UseCommand<T = undefined> = (args?: T) => (args: T) => void;
