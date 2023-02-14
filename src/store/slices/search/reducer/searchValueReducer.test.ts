import searchValueReducer, { setSearchValue } from './searchValueReducer';

describe('tests searchValueReducer', () => {
  test('checks setSearchValue action', () => {
    expect(
      searchValueReducer({ value: '' }, setSearchValue('pepperoni')),
    ).toEqual({ value: 'pepperoni' });
  });

  test('checks setSearchValue action with an undefined state', () => {
    expect(searchValueReducer(undefined, setSearchValue('pizza'))).toEqual({
      value: 'pizza',
    });
  });
});
