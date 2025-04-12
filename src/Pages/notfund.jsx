// pages/NotFound.jsx
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => (
  <Container className="pt-5">
    <h1>¡Página no encontrada!</h1>
    <p>La ruta que buscás no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </Container>
);

export default NotFound;
