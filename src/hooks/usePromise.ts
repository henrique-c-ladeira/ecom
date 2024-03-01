import { useEffect, useState } from 'react';
import { ResponseData } from '~/protocols/ResponseData';
import { UseCase } from '~/protocols/UseCase';

export const usePromise = <T = unknown>(
  usecase: UseCase<T>,
): ResponseData<T> => {
  const [response, setResponse] = useState<ResponseData<T>>({
    data: null,
    status: 'loading',
  });

  useEffect(() => {
    (async () => {
      const data = await usecase.handle();
      if (!(data instanceof Error)) setResponse({ data, status: 'success' });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return response;
};
