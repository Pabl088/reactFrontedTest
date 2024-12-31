import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.imgUrl} alt={product.name} />
      <h3>
        {product.brand} {product.model}
      </h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductItem;
