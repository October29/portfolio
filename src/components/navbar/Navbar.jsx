import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';
import { useSectionNavigation } from '../../contexts/NavigationContext';

// La prop `isFixed` nos permitirá saber si esta Navbar es la que se va a fijar.
// No la usaremos para la visibilidad en este componente, sino en el CSS del Header.
const Navbar = ({ isFixed }) => {
  const { navigateToSection } = useSectionNavigation();

  return (
    <nav className={isFixed ? styled.main_navbar_fixed : styled.main_navbar}>
      <ul className={styled.items_container}>
        <li>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('home');
            }}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('aboutMe');
            }}
          >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('proyects');
            }}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('contact');
            }}
          >
            Contáctame
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;