import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadCartCount } from "../../utils/storage";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(loadCartCount());
  }, []);

  return (
    <header>
      <Link to="/">
        <h1>MOVIL CENTER</h1>
      </Link>
      <div>
        <span>Carrito: {cartCount} items</span>
      </div>
    </header>
  );
}

export default Header;
