import { GetProductsUseCase } from '~/usecases/GetProductListUseCase';
import { LocalGetProductsRepository } from '~/repository/local/LocalGetProductsRepository';
import { usePromise } from '~/hooks/usePromise';

export const useProductListQuery = () =>
  usePromise(new GetProductsUseCase(new LocalGetProductsRepository()));
