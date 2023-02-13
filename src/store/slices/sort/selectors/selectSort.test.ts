import { RootState } from '../../../store';
import { selectSort } from './selectSort';

describe('tests selectSort', () => {
  test('works with a normal state', () => {
    expect(selectSort({ activeSort: { index: 2 } } as RootState)).toBe(2);
  });

  test('works with an empty state', () => {
    expect(selectSort({} as RootState)).toBe(0);
  });
});
