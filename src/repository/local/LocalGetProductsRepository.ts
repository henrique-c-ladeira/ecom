import { Product } from '~/entities/Product';
import { Repository } from '~/protocols/Repository';

export class LocalGetProductsRepository implements Repository<Product[]> {
  async handle(): Promise<Product[]> {
    return [
      { name: 'ProductName1', price: 12, id: '1212' },
      { name: 'ProductName2', price: 14.34, id: '1213' },
      { name: 'ProductName3', price: 12.52, id: '1214' },
      { name: 'ProductName4', price: 12.12, id: '1215' },
      { name: 'ProductName4', price: 12.12, id: '1216' },
      { name: 'ProductName4', price: 12.12, id: '1217' },
      { name: 'ProductName4', price: 12.12, id: '1218' },
      { name: 'ProductName4', price: 99.12, id: '1219' },
      { name: 'ProductName4', price: 245.12, id: '1220' },
      { name: 'ProductName4', price: 12.12, id: '12124' },
    ];
  }
}
