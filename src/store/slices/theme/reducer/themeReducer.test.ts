import themeReducer, { setTheme } from './themeReducer';

describe('themeReducer tests', () => {
  test('should set light theme', () => {
    expect(themeReducer({ isLight: false }, setTheme(true))).toEqual({
      isLight: true,
    });
  });

  test('should unset light theme', () => {
    expect(themeReducer({ isLight: true }, setTheme(false))).toEqual({
      isLight: false,
    });
  });

  test('should set theme with an undefined state', () => {
    expect(themeReducer(undefined, setTheme(false))).toEqual({
      isLight: false,
    });
  });
});
