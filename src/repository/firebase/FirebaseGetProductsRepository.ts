import { Product } from '~/entities/Product';
import { FirebaseDatabase } from '~/infra/firebase/FirebaseDatabase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Repository } from '~/protocols/Repository';

export class FirebaseGetProductsRepository implements Repository<Product[]> {
  async handle(): Promise<Product[]> {
    const col = collection(FirebaseDatabase.getInstance(), 'products');
    const snapshot = await getDocs(col);
    const list = snapshot.docs
      .map((doc) => doc.data())
      .map(
        (item) =>
          ({
            name: item.name,
            price: item.price,
            imageUrl: item.image,
          }) as Product,
      );
    return list;
  }
}
