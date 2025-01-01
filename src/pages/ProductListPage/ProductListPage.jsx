import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductList from "../../components/ProductList/ProductList";
import { fetchProducts } from "../../services/api";
import styles from "./ProductListPage.module.css";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const handleSearch = query => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter(product => product.brand.toLowerCase().includes(lowerCaseQuery) || product.model.toLowerCase().includes(lowerCaseQuery));
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.page}>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductListPage;
