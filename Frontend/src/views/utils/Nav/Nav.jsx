
import './Nav.css';
import {logo} from '../../../assets/img/';

export function Nav() {
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo"/>
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
    </nav>
  );
}
