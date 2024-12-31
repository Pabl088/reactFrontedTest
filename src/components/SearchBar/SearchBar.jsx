import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const handleSearch = event => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Buscar..." onChange={handleSearch} className={styles.searchInput} />
    </div>
  );
}

export default SearchBar;
