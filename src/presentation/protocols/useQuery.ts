import { ResponseData } from './ResponseData';

export type UseAsyncQuery<T, V = undefined> = (args?: V) => ResponseData<T>;

export type UseQuery<T, V = undefined> = (args?: V) => T;
