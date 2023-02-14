import {
  CartItemMockProps,
  CartItemMockProps2,
} from '../../tests/mocks/mockData/mockData';
import calTotalPrice from './calcTotalPrice';

describe('tests calTotalPrice', () => {
  test('works with the right parameters', () => {
    expect(calTotalPrice([CartItemMockProps, CartItemMockProps2])).toBe(100);
  });

  test('works with an empty array', () => {
    expect(calTotalPrice([])).toBe(0);
  });
});
