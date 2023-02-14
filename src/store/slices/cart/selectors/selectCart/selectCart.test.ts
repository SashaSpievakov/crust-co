import { RootState } from '../../../../store';
import { selectCart } from './selectCart';
import { CartItemsMockProps } from '../../../../../tests/mocks/mockData/mockData';

describe('tests selectCart', () => {
  test('works with a normal state', () => {
    expect(selectCart({ cart: CartItemsMockProps } as RootState)).toEqual(
      CartItemsMockProps,
    );
  });

  test('works with an empty state', () => {
    expect(selectCart({} as RootState)).toEqual({
      items: [],
      itemsCount: 0,
      totalPrice: 0,
    });
  });
});
