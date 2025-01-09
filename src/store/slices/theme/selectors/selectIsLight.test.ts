import { RootState } from '../../../store';
import { selectIsLight } from './selectIsLight';

describe('selectIsLight tests', () => {
  test('should work with a light theme false', () => {
    expect(selectIsLight({ theme: { isLight: false } } as RootState)).toBe(
      false,
    );
  });

  test('should work with a light theme true', () => {
    expect(selectIsLight({ theme: { isLight: true } } as RootState)).toBe(true);
  });

  test('should work with an empty state', () => {
    expect(selectIsLight({} as RootState)).toBe(true);
  });
});
