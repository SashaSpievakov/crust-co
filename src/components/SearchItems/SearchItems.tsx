import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSearchValue, setSearchValue } from "../../redux/slices/searchSlice";
import {Wrapper, SearchIcon, Input, Cross} from "./SearchItems.styled";

const SearchItems: React.FC = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClose = () => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  }

  return (
    // Add icon inside
    <Wrapper>
      <SearchIcon />
      <Input
        ref={inputRef}
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      {searchValue && (
        <Cross
        onClick={onClickClose}
      />
      )}
    </Wrapper>
  )
}
export default SearchItems