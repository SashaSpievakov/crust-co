import React, { memo, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  selectSearchValue,
  setSearchValue,
} from "../../store/slices/searchSlice";
import { Wrapper, SearchIcon, Input, Cross } from "./SearchItems.styled";

const SearchItems = memo(() => {
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(e.target.value));
  };

  const onClickClose = () => {
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  return (
    <Wrapper>
      <SearchIcon />
      <Input
        ref={inputRef}
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => onChangeInput(e)}
      />
      {searchValue && <Cross onClick={onClickClose} />}
    </Wrapper>
  );
});

export default SearchItems;
