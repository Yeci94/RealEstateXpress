import "./Nav.css";
import { FaUser, FaInfoCircle, FaBoxOpen, FaEnvelope } from 'react-icons/fa';

function Nav() {
  return (
    <nav className="navbar fixed-top" > 
      <div className="contenedor-nav">
        <div className="logo-container">
          <img src="/Img/logoBlanco.png" alt="Logo" className="logo-Blanco" />
          <a className="navbar-texto" href="#">
            Real Estate Xpress
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-button">
              <FaUser /> Login
            </a>
          </li>
          <li>
            <a href="#about" className="nav-button">
              <FaInfoCircle /> Conócenos
            </a>
          </li>
          <li>
            <a href="#services" className="nav-button">
              <FaBoxOpen /> Productos
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-button">
              <FaEnvelope /> Contáctanos
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );

}

export default Nav;
