import {
  CartItemMockProps,
  CartItemMockProps2,
} from '../../tests/mocks/mockData/mockData';
import { calcTotalPrice } from './calcTotalPrice';

describe('tests calcTotalPrice', () => {
  test('works with the right parameters', () => {
    expect(calcTotalPrice([CartItemMockProps, CartItemMockProps2])).toBe(100);
  });

  test('works with an empty array', () => {
    expect(calcTotalPrice([])).toBe(0);
  });
});
