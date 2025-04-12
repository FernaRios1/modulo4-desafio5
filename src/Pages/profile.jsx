import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate("/login"); // Simula cierre de sesión redirigiendo al login
  };

  return (
    <Container className="pt-5 text-center">
      <h2>Perfil de Usuario</h2>
      <p>Email: usuario@ejemplo.com</p>
      <Button variant="danger" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </Container>
  );
};

export default Profile;
