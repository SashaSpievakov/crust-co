import React, { memo, useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  selectSearchValue,
  setSearchValue,
} from "../../store/slices/searchSlice";
import { Wrapper, SearchIcon, Input, Cross } from "./SearchItems.styled";

const SearchItems = memo(() => {
  const [value, setValue] = useState<string>("");
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const updataSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 200),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    updataSearchValue(e.target.value);
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
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
      {searchValue && <Cross onClick={onClickClose} />}
    </Wrapper>
  );
});

export default SearchItems;
