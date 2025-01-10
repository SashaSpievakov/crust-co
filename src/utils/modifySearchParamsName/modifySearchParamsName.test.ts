import { modifySearchParamsName } from './modifySearchParamsName';

describe('modifySearchParamsName tests', () => {
  test('should select the right category', () => {
    expect(modifySearchParamsName('category')).toBe('category,desc');
  });

  test('should select the correct alphabetic sorting', () => {
    expect(modifySearchParamsName('A to Z')).toBe('name,asc');
  });

  test('should work with an empty string', () => {
    expect(modifySearchParamsName('   ')).toBe('');
  });
});
