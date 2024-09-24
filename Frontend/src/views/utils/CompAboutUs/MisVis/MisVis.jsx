// MisVis.jsx
import React from "react";
import "./MisVis.css";

const MisVis = () => {
  return (
    <div className="misvis-container">
      <div className="misvis-image">
        <img src="Img/people.jpg" alt="Equipo de Trabajo" />
      </div>
      <div className="misvis-columns">
        <div className="misvis-column">
          <h2>Misión</h2>
          <p>
            Renovar la experiencia de compra y venta de propiedades conectando a
            personas y comunidades a través de una plataforma digital
            innovadora, segura y fácil de usar. Nuestro objetivo es transformar
            la experiencia inmobiliaria ofreciendo un servicio personalizado,
            soporte integral, para ayudar a nuestros clientes a encontrar la
            inversión perfecta.
          </p>
        </div>
        <div className="misvis-column">
          <h2>Visión</h2>
          <p>
            Somos en una plataforma digital confiable y accesible de bienes
            raíces ubicados en Florida donde cada persona, pueda encontrar y
            realizar su inversión inmobiliaria con facilidad, transparencia y
            seguridad. Aspiramos a redefinir el futuro del mercado inmobiliario
            mediante la innovación constante, la experiencia personalizada y el
            compromiso con la sostenibilidad y el desarrollo comunitario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MisVis;