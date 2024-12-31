import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css"; 

function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <img src={product.imgUrl} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productTitle}>
        {product.brand} {product.model}
      </h3>
      <p className={styles.productPrice}>${product.price}</p>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
        View Details
      </Link>
    </div>
  );
}

export default ProductItem;
