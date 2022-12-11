import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectSearchValue,
  setSearchValue,
} from "../../redux/slices/searchSlice";
import { Wrapper, SearchIcon, Input, Cross } from "./SearchItems.styled";

const SearchItems = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

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
};
export default SearchItems;
