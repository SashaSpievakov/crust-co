import { GrClose } from 'react-icons/gr';

import styles from "./styles.module.scss";

const index = ({ searchValue, setSearchValue }) => {
  return (
    // Add icon inside
    <div className={styles.wrapper}>
      <input
      placeholder="Search..."
      className={styles.input}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <GrClose
      className={styles.close}
      onClick={() => setSearchValue('')}
    />
    </div>

    // Add icon clear
  )
}
export default index