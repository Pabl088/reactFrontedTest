import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadCartCount } from "../../utils/storage";
import styles from "./Header.module.css";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(loadCartCount());
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>MOVIL CENTER</h1>
      </Link>
      <div className={styles.nav}>
        <span>Carrito: {cartCount} items</span>
      </div>
    </header>
  );
}

export default Header;
