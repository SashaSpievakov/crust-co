import {
  CartItemMockProps,
  CartItemMockProps2,
} from '@src/tests/mocks/mockData/mockData';

import { calcTotalCount } from './calcTotalCount';

describe('calTotalCount tests', () => {
  test('should calculate the correct amount', () => {
    expect(calcTotalCount([CartItemMockProps, CartItemMockProps2])).toBe(14);
  });

  test('should work with an empty array', () => {
    expect(calcTotalCount([])).toBe(0);
  });
});
