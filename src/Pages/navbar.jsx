import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "./CartContext";

const NavbarComponent = () => {
  const { total } = useCart();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand className="ms-3">Pizzería Mamma Mía</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/">
            <Button variant="outline-light" className="me-2">🍕 Home</Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile">
                <Button variant="outline-light" className="me-2">🔓 Profile</Button>
              </Link>
              <Button variant="outline-light" className="me-2" onClick={handleLogout}>
                🔒 Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline-light" className="me-2">🔐 Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-light" className="me-2">📝 Register</Button>
              </Link>
            </>
          )}
          <Link to="/cart">
            <Button variant="outline-info" className="me-2">
              🛒 Total: ${total.toLocaleString()}
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
