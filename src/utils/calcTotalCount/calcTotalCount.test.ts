import {
  CartItemMockProps,
  CartItemMockProps2,
} from '../../tests/mocks/mockData/mockData';
import calTotalCount from './calcTotalCount';

describe('tests calTotalCount', () => {
  test('works with the right parameters', () => {
    expect(calTotalCount([CartItemMockProps, CartItemMockProps2])).toBe(14);
  });

  test('works with an empty array', () => {
    expect(calTotalCount([])).toBe(0);
  });
});
