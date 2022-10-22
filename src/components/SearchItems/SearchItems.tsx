import React, { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchValue, setSearchValue } from '../../redux/slices/searchSlice';
import styles from "./styles.module.scss";

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
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        placeholder="Search..."
        className={styles.input}
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      {searchValue && (
        <GrClose
        className={styles.close}
        onClick={onClickClose}
      />
      )}
    </div>
  )
}
export default SearchItems