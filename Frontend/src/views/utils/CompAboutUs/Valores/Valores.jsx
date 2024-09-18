import React from 'react';
import './Valores.css';

const Valores = () => {
  return (

    <div class="container-fluid">
      <div class="text-center">
        <h2><strong>Nuestros Valores</strong></h2>
      </div>
      <br />
      <div class="row">

        <div class="col-md-3">
          <div class="card">
              <img src="/Img/transparencia.jpg" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body text-center">
              <h3 class="card-title">Transparencia</h3>
              <p class="card-text">Creemos en la claridad en todas nuestras interacciones. En RealEstateXpress, fomentamos la comunicación abierta y honesta, lo que genera confianza y asegura que nuestros clientes estén bien informados en cada etapa.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
              <img src="/Img/inovacion.jpg" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body text-center">
              <h3 class="card-title">Innovación</h3>
              <p class="card-text">La innovación es un motor clave en nuestra empresa. Siempre buscamos nuevas formas de mejorar y optimizar nuestros procesos, adaptándonos a los cambios del mercado para ofrecer soluciones efectivas y modernas.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
              <img src="/Img/compromiso.jpg" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body text-center">
              <h3 class="card-title">Compromiso</h3>
              <p class="card-text">Nuestro compromiso es ofrecer un servicio excepcional y personalizado. Nos enfocamos en entender y satisfacer las necesidades de nuestros clientes para asegurar su satisfacción y lealtad.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
              <img src="/Img/integridad.jpg" class="card-img-top" alt="Imagen de ejemplo"/>
            <div class="card-body text-center">
              <h3 class="card-title">Integridad</h3>
              <p class="card-text">En RealEstateXpress, la integridad es fundamental. Actuamos con honestidad y principios éticos en cada transacción, garantizando confianza y respeto hacia nuestros clientes y colaboradores.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Valores;
