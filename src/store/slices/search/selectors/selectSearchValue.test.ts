import { RootState } from '../../../store';
import { selectSearchValue } from './selectSearchValue';

describe('tests selectSearchValue', () => {
  test('works with a normal state', () => {
    expect(
      selectSearchValue({ searchValue: { value: 'shrimp pi' } } as RootState),
    ).toBe('shrimp pi');
  });

  test('works with an empty state', () => {
    expect(selectSearchValue({} as RootState)).toBe('');
  });
});
