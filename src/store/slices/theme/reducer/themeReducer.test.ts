import themeReducer, { setTheme } from './themeReducer';

describe('tests themeReducer', () => {
  test('checks setTheme action', () => {
    expect(themeReducer({ isLight: false }, setTheme(true))).toEqual({
      isLight: true,
    });
  });

  test('checks setTheme action (to false)', () => {
    expect(themeReducer({ isLight: true }, setTheme(false))).toEqual({
      isLight: false,
    });
  });

  test('checks setTheme action with an undefined state', () => {
    expect(themeReducer(undefined, setTheme(false))).toEqual({
      isLight: false,
    });
  });
});
