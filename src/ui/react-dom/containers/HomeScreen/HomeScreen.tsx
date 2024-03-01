import React from 'react';
import { Box, ProductCard } from '../../components';
import { UseHomeScreenOutput } from '~/presentation/containers/useHomeScreen';

export const HomeScreen: React.FC<UseHomeScreenOutput> = (props) => (
  <>
    <Box className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-4">
      {props?.products?.map((item) => (
        <ProductCard
          {...item}
          key={`${item.name}-${item.id}`}
          onPress={() => console.log('TODO!')}
        />
      ))}
    </Box>
  </>
);
