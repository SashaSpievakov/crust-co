import { RootState } from '../../../store';
import { selectCategory } from './selectCategory';

describe('tests selectCategory', () => {
  test('works with a normal state', () => {
    expect(selectCategory({ activeCategory: { index: 3 } } as RootState)).toBe(
      3,
    );
  });

  test('works with an empty state', () => {
    expect(selectCategory({} as RootState)).toBe(0);
  });
});
