import { GrClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchValue } from '../../redux/slices/searchSlice';
import styles from "./styles.module.scss";

const SearchItems = () => {
  const searchValue = useSelector((state) => state.searchValue.value);
  const dispatch = useDispatch();

  return (
    // Add icon inside
    <div className={styles.wrapper}>
      <input
      placeholder="Search..."
      className={styles.input}
      value={searchValue}
      onChange={(e) => dispatch(setSearchValue(e.target.value))}
    />
    <GrClose
      className={styles.close}
      onClick={() => dispatch(setSearchValue(''))}
    />
    </div>

    // Add icon clear
  )
}
export default SearchItems