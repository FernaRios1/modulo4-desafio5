import Header from './header';
import CardPizza from "./cardpizza";

const Home = ({ pizzas, addToCart }) => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="mb-4">Nuestras pizzas</h1>
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza pizza={pizza} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
