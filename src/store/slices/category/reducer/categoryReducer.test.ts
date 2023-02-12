import categoryReducer, { setCategory } from './categoryReducer';

describe('tests categoryReducer', () => {
  test('checks setCategory action', () => {
    expect(categoryReducer({ index: 0 }, setCategory(2))).toEqual({ index: 2 });
  });

  test('checks setCategory action with an empty state', () => {
    expect(categoryReducer(undefined, setCategory(1))).toEqual({ index: 1 });
  });
});
