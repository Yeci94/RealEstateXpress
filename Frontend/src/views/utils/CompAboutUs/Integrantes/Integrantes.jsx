import React from 'react';
import './integrantes.css';

const Integrantes = () => {
  return (
    <div class="container-fluid">
      <div class="text-center">
        <h2 class="text"><strong>Integrantes de RealEstateXpress</strong></h2>
      </div>
      <br />
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card">
              <img src="/Img/amer.png" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body">
              <h4 class="card-title">Amer Abdalla Hasan</h4>
              <p>Desarrollador Full Stak Java</p>
              <p>Correo: amer@gmail.com</p>
              <p>telefono: 123456789</p>
              <button class="btn btn-success flex-grow-1 ml-1" data-bs-toggle="modal" data-bs-target="#detailModalAmer">Conocer</button>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card">
              <img src="/Img/diana.png" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body">
              <h4 class="card-title">Diana Rodriguez</h4>
              <p>Desarrollador Full Stak Java</p>
              <p>Correo: diana@gmail.com</p>
              <p>telefono: 123456789</p>
              <button class="btn btn-success flex-grow-1 ml-1" data-bs-toggle="modal" data-bs-target="#detailModalDiana">Conocer</button>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card">
              <img src="/Img/andres.png" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body">
              <h4 class="card-title">Andres Leon Duran</h4>
              <p>Desarrollador Full Stak Java</p>
              <p>Correo: andres@gmail.com</p>
              <p>telefono: 123456789</p>
              <button class="btn btn-success flex-grow-1 ml-1" data-bs-toggle="modal" data-bs-target="#detailModalAndres">Conocer</button>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card">
              <img src="/Img/yecibeth.png" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body">
              <h4 class="card-title">Yecibeth Rivera</h4>
              <p>Desarrollador Full Stak Java</p>
              <p>Correo: yecibeth@gmail.com</p>
              <p>telefono: 123456789</p>
              <button class="btn btn-success flex-grow-1 ml-1" data-bs-toggle="modal" data-bs-target="#detailModalYeci">Conocer</button>
            </div>
          </div>
        </div>
        <div class="modal fade" id="detailModalAmer" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Acerca de mi</h5>
              </div>
              <div class="modal-body">
                <p>"Soy un desarrollador Full Stack con una sólida experiencia en el ecosistema Java. Mi especialidad incluye el desarrollo tanto del front-end como del back-end, utilizando tecnologías como Java, Spring Boot, y frameworks modernos para la creación de aplicaciones robustas y eficientes. Poseo habilidades avanzadas en la integración de bases de datos SQL y NoSQL, así como en la implementación de soluciones escalables y seguras. Mi enfoque se centra en entregar soluciones tecnológicas de alta calidad que satisfagan las necesidades del usuario final y contribuyan al éxito del negocio."</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
              </div>
              </div>
            </div>
        </div>
        <div class="modal fade" id="detailModalAndres" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Acerca de mi</h5>
              </div>
              <div class="modal-body">
                <p>"Desarrollador Full Stack Java con experiencia en la creación de aplicaciones empresariales completas utilizando Java, Spring Boot, y tecnologías relacionadas. Mi experiencia incluye el diseño e implementación de APIs RESTful, la integración de sistemas con bases de datos relacionales y no relacionales, y el desarrollo de interfaces de usuario interactivas y responsivas con tecnologías front-end modernas. Estoy familiarizado con herramientas y prácticas de desarrollo ágil, incluyendo Git, CI/CD, y pruebas automatizadas, lo que me permite entregar productos de software de alta calidad de manera eficiente."</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
              </div>
              </div>
            </div>
        </div>
        <div class="modal fade" id="detailModalDiana" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Acerca de mi</h5>
              </div>
              <div class="modal-body">
                <p>"Como desarrollador Full Stack especializado en Java, he liderado y contribuido a proyectos que abarcan desde el diseño del front-end hasta la implementación del back-end. He trabajado en la construcción de aplicaciones escalables utilizando Spring Boot, integrando sistemas con microservicios y API RESTful. Además, tengo experiencia en la optimización de bases de datos y en la implementación de prácticas de seguridad en el desarrollo de software. Mi enfoque se centra en crear soluciones innovadoras que no solo cumplan con los requisitos técnicos, sino que también mejoren la experiencia del usuario y faciliten la gestión eficiente de recursos."</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
              </div>
              </div>
            </div>
        </div>
        <div class="modal fade" id="detailModalYeci" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Acerca de mi</h5>
              </div>
              <div class="modal-body">
                <p>"Desarrollador Full Stack con experiencia integral en el desarrollo de aplicaciones basadas en Java. Mi habilidad para trabajar en todas las capas del desarrollo de software me permite abordar desafíos técnicos complejos y proporcionar soluciones efectivas. Con un sólido conocimiento en Java, Spring Boot, y tecnologías front-end como HTML, CSS y JavaScript, me dedico a construir aplicaciones robustas y escalables que cumplen con los estándares de la industria. Mi pasión por la tecnología y mi compromiso con la mejora continua me impulsan a buscar siempre las mejores prácticas y a mantenerme al tanto de las últimas tendencias en desarrollo de software."</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>

  );
};

export default Integrantes;
