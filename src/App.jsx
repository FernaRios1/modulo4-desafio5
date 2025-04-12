import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [cart, setCart] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error cargando pizzas:", error));
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((p) => p.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === pizzaId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  return (
    <Router>
      <NavbarComponent cart={cart} />
      <Routes>
        <Route path="/" element={<Home pizzas={pizzas} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pizza/p001" element={<PizzaDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
