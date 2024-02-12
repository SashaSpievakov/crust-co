import {
  CartItemMockProps,
  CartItemMockProps2,
  CartItemsMockProps,
} from '../../../../../tests/mocks/mockData/mockData';
import { RootState } from '../../../../store';
import { selectItemsCount } from './selectItemsCount';

describe('tests selectItemsCount', () => {
  test('works with a normal state', () => {
    expect(
      selectItemsCount('6')({ cart: CartItemsMockProps } as RootState),
    ).toBe(13);
  });

  test('works with a wrong id', () => {
    expect(
      selectItemsCount('7')({ cart: CartItemsMockProps } as RootState),
    ).toBe(0);
  });

  test('works with multiple items of the same id', () => {
    expect(
      selectItemsCount('6')({
        cart: {
          totalPrice: 161,
          itemsCount: 21,
          items: [
            CartItemMockProps,
            CartItemMockProps2,
            {
              id: '6',
              name: 'Cheesburger Pizza',
              price: 10,
              size: 12,
              type: 'traditional',
              count: 7,
            },
          ],
        },
      } as RootState),
    ).toBe(20);
  });

  test('works with an empty state', () => {
    expect(selectItemsCount('15')({} as RootState)).toBe(0);
  });
});
