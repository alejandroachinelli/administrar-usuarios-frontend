import { NavbarContainer, NavbarOptions, NavbarOption } from './styles';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
      <NavbarContainer>
        <NavbarOptions>
            <NavbarOption
                as={Link}
                to="/"
            >
                Buscar Usuarios
            </NavbarOption>
            <NavbarOption
                as={Link}
                to="/agregar-usuario"
            >
                Agregar Usuario
            </NavbarOption>
        </NavbarOptions>
      </NavbarContainer>
  );
}

export default NavigationBar;