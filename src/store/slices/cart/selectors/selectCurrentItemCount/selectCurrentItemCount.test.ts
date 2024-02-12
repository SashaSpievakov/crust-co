import { CartItemsMockProps } from '../../../../../tests/mocks/mockData/mockData';
import { RootState } from '../../../../store';
import { selectCurrentItemCount } from './selectCurrentItemCount';

describe('tests selectCurrentItemCount', () => {
  test('works with a normal state', () => {
    expect(
      selectCurrentItemCount(
        'Pepperoni Pizza',
        16,
        'traditional',
      )({
        cart: CartItemsMockProps,
      } as RootState),
    ).toBe(1);
  });

  test('works with not mathching parameters', () => {
    expect(
      selectCurrentItemCount(
        'Pepperoni Pizza',
        16,
        'thin',
      )({
        cart: CartItemsMockProps,
      } as RootState),
    ).toBe(0);
  });

  test('works with an empty state', () => {
    expect(
      selectCurrentItemCount('Pepperoni Pizza', 16, 'thin')({} as RootState),
    ).toBe(0);
  });
});
