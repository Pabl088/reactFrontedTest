import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ cartCount }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>MOVIL CENTER</h1>
      </Link>
      <div className={styles.cart}>
        <span>Carrito: {cartCount} items</span>
      </div>
    </header>
  );
}

export default Header;
