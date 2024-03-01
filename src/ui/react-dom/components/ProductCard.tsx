import React from 'react';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { Product } from '../../../entities/Product';

type ProductCardProps = Product & {
  onPress: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = (props) => (
  <Card shadow="sm" isPressable onPress={props.onPress}>
    <CardBody className="overflow-visible p-0">
      <p className="text-default-500 p-2">{props.name}</p>
      <Image
        shadow="sm"
        radius="lg"
        width="100%"
        alt={props.name}
        className="w-full object-cover h-[140px]"
        // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F74e24711-061f-4a7c-9652-2c72c9924754%2Fdciq5fp-0af6a647-e63e-4806-95d8-41b28ce78c21.png%2Fv1%2Ffill%2Fw_1192%2Ch_670%2Cstrp%2Fpikachu_on_acid_by_cfsketches_dciq5fp-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzc0ZTI0NzExLTA2MWYtNGE3Yy05NjUyLTJjNzJjOTkyNDc1NFwvZGNpcTVmcC0wYWY2YTY0Ny1lNjNlLTQ4MDYtOTVkOC00MWIyOGNlNzhjMjEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.E5AQLku1Xs69Y-hYBpE584Nqjfw8nzS1G2j2siE8fkU&f=1&nofb=1&ipt=06cbed2a34474635168d970503319299d459d773d867459457bc0c4b45f7e586&ipo=images"
        src={props.imageUrl}
      />
    </CardBody>
    <CardFooter className="text-small justify-between">
      <p className="text-default-500">
        R$ {props.price.toFixed(2).replace('.', ',')}
      </p>
      <Button color="primary">Add to cart</Button>
    </CardFooter>
  </Card>
);
