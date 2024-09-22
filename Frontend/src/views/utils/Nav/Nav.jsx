import { useEffect, useState } from 'react';
import "./Nav.css";
import { FaUser, FaInfoCircle, FaBoxOpen, FaEnvelope } from 'react-icons/fa';

function Nav() {
  const [scrolling, setScrolling] = useState(true); // Inicialmente visible
  const [isScrolling, setIsScrolling] = useState(false); // Indica si se está scrollando
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // Indica si el cursor está sobre la navbar

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout); // Limpia el timeout previo
      }

      if (window.scrollY > 0) {
        setScrolling(true); // Muestra la navbar cuando se detecta el scroll
        setIsScrolling(true); // Marca que se está scrollando

        // Oculta la navbar
        const newTimeout = setTimeout(() => {
          if (!isHovered) {
            setScrolling(false);
            setIsScrolling(false);
          }
        }, 500);

        setScrollTimeout(newTimeout);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout); // Limpia el timeout al desmontar el componente
      }
    };
  }, [scrollTimeout, isHovered]);

  return (
    <nav 
      className={`navbar fixed-top ${scrolling ? '' : 'hidden'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <a href="/AboutUS" className="nav-button">
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
