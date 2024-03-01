import { Product } from '~/entities/Product';
import { Repository } from '~/protocols/Repository';
import { UseCase } from '~/protocols/UseCase';

export class GetProductsUseCase implements UseCase<Product[]> {
  repository: Repository<Product[]>;

  constructor(repository: GetProductsUseCase['repository']) {
    this.repository = repository;
  }

  async handle(): Maybe<Product[]> {
    try {
      const products = await this.repository.handle();
      return products;
    } catch (err) {
      return new Error();
    }
  }
}
