import styles from "./styles.module.scss";

const index = ({ searchValue, setSearchValue }) => {
  return (
    // Add icon inside
    <input
      placeholder="Search..."
      className={styles.root}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
    // Add icon clear
  )
}
export default index