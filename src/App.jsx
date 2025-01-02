import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage setCartCount={setCartCount} />} />
      </Routes>
    </Router>
  );
}

export default App;
