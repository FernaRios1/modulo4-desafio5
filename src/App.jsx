import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartProvider } from "./Pages/CartContext";
import NavbarComponent from "./Pages/navbar";
import Home from "./Pages/home";
import Cart from "./Pages/cart";
import Footer from "./Pages/footer";
import PizzaDetail from "./Pages/pizzadetail";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Profile from "./Pages/profile";
import NotFound from "./Pages/notfund";
import './index.css';

function App() {
  // Estado para almacenar las pizzas
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Verifica que el endpoint sea correcto
    fetch("http://localhost:5002/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => {
        console.error("Error al cargar las pizzas:", err);
      });
  }, []);

  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home pizzas={pizzas} />} /> {/* Pasa las pizzas al componente Home */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
