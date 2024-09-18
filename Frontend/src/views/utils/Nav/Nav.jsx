import "./Nav.css";
import { FaUser, FaInfoCircle, FaBoxOpen, FaEnvelope } from 'react-icons/fa';

<<<<<<< HEAD
function Nav() {
  return (
    <nav className="navbar">
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
=======
import './Nav.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté 

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Real Estate Xpress</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quieson">Quiénes Somos</Link>
            </li>
          </ul>
        </div>
>>>>>>> 31e974c4c8ac98053b97d5aafeca3081e424731b
      </div>
    </nav>
  );

}

export default Nav;
