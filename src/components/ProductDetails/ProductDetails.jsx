import { useState } from "react";
import { addToCart } from "../../services/api";
import styles from "./ProductDetails.module.css";

function ProductDetails({ product, setCartCount }) {
  if (!product) return <p>Cargando...</p>;

  const [selectedColor, setSelectedColor] = useState(product.options.colors[0]?.code);
  const [selectedStorage, setSelectedStorage] = useState(product.options.storages[0]?.code);

  const handleAddToCart = async () => {
    if (!selectedColor || !selectedStorage) {
      alert("Debe seleccionar las opciones de color y almacenamiento.");
      return;
    }

    try {
      const response = await addToCart({
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      });
      setCartCount(response.count);
      alert(`Producto añadido al carrito. Total en el carrito: ${response.count}`);
    } catch (error) {
      alert("Hubo un problema al añadir el producto al carrito.");
    }
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.image}>
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className={styles.description_actions_container}>
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
          <div className={styles.selectors}>
            <label>
              <strong>Color:</strong>
              <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
                {product.options.colors.map(color => (
                  <option key={color.code} value={color.code}>
                    {color.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <strong>Almacenamiento:</strong>
              <select value={selectedStorage} onChange={e => setSelectedStorage(e.target.value)}>
                {product.options.storages.map(storage => (
                  <option key={storage.code} value={storage.code}>
                    {storage.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
