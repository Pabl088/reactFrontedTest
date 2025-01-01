import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imgUrl} alt={product.name} className={styles.productImage} />
        <h3 className={styles.productTitle}>
          {product.brand} {product.model}
        </h3>
        <p className={styles.productPrice}>{product.price ? "$ " + product.price : "Precio no especificado"}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
