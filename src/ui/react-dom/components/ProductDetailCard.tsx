import React from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { Product } from '../../../entities/Product';

type ProductDetailCardProps = Product;

export const ProductDetailCard: React.FC<ProductDetailCardProps> = (props) => (
  <Card className="col-span-12 sm:col-span-4 h-[300px]">
    <CardBody>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={props.imageUrl}
      />
    </CardBody>
    <CardFooter className="text-large">
      <b className="text-default-500">
        R$ {props.price.toFixed(2).replace('.', ',')}
      </b>
    </CardFooter>
  </Card>
);
