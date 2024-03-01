import { Product } from '~/entities/Product';

export const mockProductListService = async (mocks?: Product[]) => {
  return mocks ?? [];
};
