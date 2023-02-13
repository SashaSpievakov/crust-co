import { RootState } from '../../../store';
import { selectIsLight } from './selectIsLight';

describe('tests selectIsLight', () => {
  test('works with a normal state', () => {
    expect(selectIsLight({ theme: { isLight: false } } as RootState)).toBe(
      false,
    );
  });

  test('works with a normal state (true)', () => {
    expect(selectIsLight({ theme: { isLight: true } } as RootState)).toBe(true);
  });

  test('works with an empty state', () => {
    expect(selectIsLight({} as RootState)).toBe(true);
  });
});
