import fondo from "../assets/img/Header.jpg";

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="overlay"></div>
            <div className="header-content">
                <h1>¡Pizzería Mamma Mía!</h1>
                <p>Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </header>
    );
};

export default Header;
