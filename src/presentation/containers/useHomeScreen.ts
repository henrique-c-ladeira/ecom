import { Product } from '~/entities/Product';
import { UseAsyncQuery } from '../protocols/useQuery';
import { UseCommand } from '../protocols/useCommand';

export type UseHomeScreenOutput = {
  products: Product[];
};

export type UseHomeScreenServices = {
  useProductListQuery: UseAsyncQuery<Product[]>;
};

export const useHomeScreen = ({
  useProductListQuery,
}: UseHomeScreenServices): UseHomeScreenOutput => {
  const response = useProductListQuery();

  return {
    products: response.status === 'success' ? response.data : [],
  };
};
