import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { fetchProductDetails } from "../../services/api";
import styles from "./ProductDetailsPage.module.css"; 

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProductDetails();
  }, [id]);

  return (
    <div className={styles.page}>
      <button onClick={() => window.history.back()} className={styles.backButton}>
        &larr; Volver
      </button>
      {product ? <ProductDetails product={product} /> : <p className={styles.loadingMessage}>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ProductDetailsPage;
