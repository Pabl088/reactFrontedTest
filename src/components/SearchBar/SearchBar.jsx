function SearchBar({ onSearch }) {
  const handleSearch = event => {
    onSearch(event.target.value);
  };

  return <input type="text" placeholder="Search..." onChange={handleSearch} />;
}

export default SearchBar;
