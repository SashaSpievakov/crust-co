import {
  CartItemMockProps,
  CartItemMockProps2,
} from '../../tests/mocks/mockData/mockData';
import { calcTotalCount } from './calcTotalCount';

describe('tests calTotalCount', () => {
  test('works with the right parameters', () => {
    expect(calcTotalCount([CartItemMockProps, CartItemMockProps2])).toBe(14);
  });

  test('works with an empty array', () => {
    expect(calcTotalCount([])).toBe(0);
  });
});
