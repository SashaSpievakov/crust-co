import sortReducer, { setSort } from './sortReducer';

describe('tests sortReducer', () => {
  test('checks setSort action', () => {
    expect(sortReducer({ index: 0 }, setSort(1))).toEqual({ index: 1 });
  });

  test('checks setSort action with an empty state', () => {
    expect(sortReducer(undefined, setSort(2))).toEqual({ index: 2 });
  });
});
