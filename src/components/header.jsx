import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header>
      <Link to="/">MOVIL CENTER</Link>
      <span>Cart: {cartCount} items</span>
    </header>
  );
}

export default Header;
