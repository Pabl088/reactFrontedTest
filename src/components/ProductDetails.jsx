function ProductDetails({ product }) {
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="image">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="details">
        <h2>Detalles del Producto</h2>
        <p>
          <strong>Marca:</strong> {product.brand}
        </p>
        <p>
          <strong>Modelo:</strong> {product.model}
        </p>
        <p>
          <strong>Precio:</strong> ${product.price}
        </p>
        <p>
          <strong>CPU:</strong> {product.cpu}
        </p>
        <p>
          <strong>RAM:</strong> {product.ram}
        </p>
        <p>
          <strong>Sistema Operativo:</strong> {product.os}
        </p>
        <p>
          <strong>Resolución de Pantalla:</strong> {product.displaySize}
        </p>
        <p>
          <strong>Batería:</strong> {product.battery}
        </p>
        <p>
          <strong>Cámaras:</strong> {product.primaryCamera.join(", ")}
        </p>
        <p>
          <strong>Dimensiones:</strong> {product.dimentions}
        </p>
        <p>
          <strong>Peso:</strong> {product.weight ? `${product.weight} g` : "No especificado"}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
