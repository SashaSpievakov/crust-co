import {
  CartItemMockProps,
  CartItemMockProps2,
} from '@src/tests/mocks/mockData/mockData';

import { calcTotalPrice } from './calcTotalPrice';

describe('calcTotalPrice tests', () => {
  test('should calculate total price', () => {
    expect(calcTotalPrice([CartItemMockProps, CartItemMockProps2])).toBe(100);
  });

  test('should work with an empty array', () => {
    expect(calcTotalPrice([])).toBe(0);
  });
});
