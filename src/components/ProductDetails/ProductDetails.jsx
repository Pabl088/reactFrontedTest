import { addToCart } from "../../services/api";
import styles from "./ProductDetails.module.css";

function ProductDetails({ product }) {
  if (!product) return <p>Loading...</p>;

  const handleAddToCart = async () => {
    const selectedColor = product.options.colors[0]?.code || null;
    const selectedStorage = product.options.storages[0]?.code || null;

    if (!selectedColor || !selectedStorage) {
      alert("No se puede añadir al carrito debido a datos faltantes.");
      return;
    }

    try {
      const response = await addToCart({
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      });
      alert(`Producto añadido al carrito. Total en el carrito: ${response.count}`);
    } catch (error) {
      console.error("Error al añadir el producto al carrito:", error);
      alert("Hubo un problema al añadir el producto al carrito.");
    }
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.image}>
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className={styles.details}>
        <h2>Detalles del Producto</h2>
        <p>
          <strong>Marca:</strong> {product.brand}
        </p>
        <p>
          <strong>Modelo:</strong> {product.model}
        </p>
        <p>
          <strong>Precio:</strong> {product.price ? "$ " + product.price : "No especificado"}
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
          <strong>Cámara principal:</strong> {typeof product.primaryCamera === "string" ? product.primaryCamera : product.primaryCamera.join(", ")}
        </p>
        <p>
          <strong>Cámara secundaria:</strong> {typeof product.secondaryCmera === "string" ? product.secondaryCmera : product.secondaryCmera.join(", ")}
        </p>
        <p>
          <strong>Dimensiones:</strong> {product.dimentions}
        </p>
        <p>
          <strong>Peso:</strong> {product.weight ? `${product.weight} g` : "No especificado"}
        </p>
      </div>
      <div className={styles.actions}>
        <button onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ProductDetails;
