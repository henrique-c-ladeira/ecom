import { Product } from '~/entities/Product';
import { ResponseData } from '~/protocols/ResponseData';

export const mockUseProductList = (
  mocks?: Partial<ResponseData<Product[]>>,
): ResponseData<Product[]> =>
  ({
    data: null,
    status: 'idle',
    ...mocks,
  }) as ResponseData<Product[]>;
