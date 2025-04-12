const Cart = ({ cart, addToCart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {cart.map((pizza) => (
            <li
              key={pizza.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <img src={pizza.img} alt={pizza.name} width="50" className="me-3" />
              <span>{pizza.name} - ${pizza.price.toLocaleString()}</span>
              <div>
                <button onClick={() => removeFromCart(pizza.id)} className="btn btn-outline-danger">
                  -
                </button>
                <span className="mx-2">{pizza.quantity}</span>
                <button onClick={() => addToCart(pizza)} className="btn btn-outline-primary">
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3">Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-success">Pagar</button>
    </div>
  );
};

export default Cart;
