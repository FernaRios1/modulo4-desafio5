import { useCart } from "./CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">${pizza.price.toLocaleString()}</p>
        <button className="btn btn-primary" onClick={() => addToCart(pizza)}>
          Añadir
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
