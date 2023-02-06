import React, { memo, useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  selectSearchValue,
  setSearchValue,
} from '../../store/slices/searchSlice';
import { Wrapper, SearchIcon, Input, Cross } from './SearchItems.styled';

const SearchItems = memo(() => {
  const [value, setValue] = useState<string>('');
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const updataSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 200),
    [],
  );

  const onClickSearch = () => {
    inputRef.current?.focus();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    updataSearchValue(e.target.value);
  };

  const onClickClose = () => {
    setValue('');
    dispatch(setSearchValue(''));
  };

  return (
    <Wrapper>
      <SearchIcon onClick={onClickSearch} data-testid="searchIcon" />
      <Input
        ref={inputRef}
        placeholder="Search..."
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
      {searchValue && <Cross onClick={onClickClose} data-testid="cleanInput" />}
    </Wrapper>
  );
});

export default SearchItems;
