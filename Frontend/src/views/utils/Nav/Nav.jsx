import './Nav.css';
import logoBlanco from '../../../assets/img/logoBlanco.png';

function Nav() {
  return (
<nav class="navbar"> 
  <div class="container-fluid">
    <div class="cajita-1">
      <button class="btn-conocenos">
        Conócenos
      </button>
    </div>
    <div class="cajita-2">
      <img class="icono-bonito" src="../Pic/icono1.png" alt="Icono Bonito"/>
      <a class="navbar-brand" href="#">SportVibes</a>
    </div>
    <div class="cajita-3">
      <img src="../Pic/Cartnav.png" class="icono-cart" alt="Carrito" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
          Categorías
        </h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">DEPORTES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ROPA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SERVICIOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACTANOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GALERIA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">REFERENCIAS</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ACCESORIOS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">VIAJE</a></li>
              <li><a class="dropdown-item" href="#">TECNOLOGIA</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

  );
}

export default Nav;