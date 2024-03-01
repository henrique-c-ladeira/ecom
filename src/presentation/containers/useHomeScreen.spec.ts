import { describe, expect, it } from 'bun:test';
import { renderHook } from '@testing-library/react';
import {
  UseHomeScreenServices,
  useHomeScreen,
} from '~/presentation/containers/useHomeScreen';
import { mockUseProductList } from '~/tests/mocks/mockUseProductList';

describe('Home Screen', () => {
  const makeSut = ({ useProductListQuery }: UseHomeScreenServices) => {
    const sut = renderHook(() => useHomeScreen({ useProductListQuery }));
    return { sut };
  };

  it('should return product list as the result of product service', async () => {
    const { sut } = makeSut({
      useProductListQuery: () => mockUseProductList(),
    });
    expect(sut.result.current.products).toEqual([]);
  });
});
