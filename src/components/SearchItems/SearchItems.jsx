import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from "./styles.module.scss";

const SearchItems = () => {
  const searchValue = useSelector((state) => state.searchValue.value);
  const dispatch = useDispatch();

  const inputRef = useRef();

  const onClickClose = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
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
    <GrClose
      className={styles.close}
      onClick={onClickClose}
    />
    </div>
  )
}
export default SearchItems