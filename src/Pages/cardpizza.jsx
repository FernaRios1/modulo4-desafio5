import { Link } from "react-router-dom"; // Asegúrate de tener esto al inicio

const CardPizza = ({ pizza, addToCart }) => {
  const { id, name, price, ingredients, img } = pizza;

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <Link to={`/pizza/${id}`} className="btn btn-outline-primary">
          Ver más 🍕
        </Link>
        <button className="btn btn-primary mt-2" onClick={() => addToCart(pizza)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza; // 👈 Esto es lo que te faltaba
