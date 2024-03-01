type Idle = {
  data: null;
  status: 'idle';
};

type SuccessResponseData<T> = {
  data: T;
  status: 'success';
};

type LoadingResponseData<T> = {
  data: T | null;
  status: 'loading';
};

type ErrorResponseData = {
  data: unknown;
  status: 'error';
};

export type ResponseData<T> =
  | Idle
  | SuccessResponseData<T>
  | LoadingResponseData<T>
  | ErrorResponseData;
