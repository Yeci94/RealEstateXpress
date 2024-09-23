import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contacto.css";
import "../../App.css";
import Nav from "../utils/Nav/Nav";
import Footer from "../utils/Footer/Footer";
import { toast } from 'react-toastify';


function ContactForm() {
  const [state, handleSubmit] = useForm("mvgpjpjk");
  const [submit, setSubmit] = useState(null);
  if (state.succeeded) {
    toast.success('¡Gracias por contactarnos!');
  }

  return (
    <>
    <Nav/>
    <div className="contenedor-app">
    <div className="container-fluid"> 
      <div className="row">
        <div className="text-center">
          <h1 className="text">
            <strong>Póngase en contacto con nosotros</strong>
          </h1>
        </div>
      </div>
    
      {/* Fila con espaciado entre columnas */}
      <div className="row with-gap">
        <div className="col-md-2 col-sm-12 mb-4"></div>
    
        {/* Columna para el formulario */}
        <div className="col-md-4 col-sm-12 mb-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="full-name">
              <h3>Envíanos un mensaje</h3>
            </label>
            <input
              id="full-name"
              type="text"
              name="full-name"
              placeholder="Ingrese su nombre completo"
            />
            <ValidationError
              prefix="Nombre Completo"
              field="full-name"
              errors={state.errors}
            />
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder="Ingresa tu número de teléfono"
            />
            <ValidationError
              prefix="Número de Teléfono"
              field="phone"
              errors={state.errors}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Dejanos tu comentario"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="button" type="submit" disabled={state.submitting}>
              {" "}Enviar Mensaje{" "}
            </button>
          </form>
        </div>
    
        {/* Columna para la información de contacto */}
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="ContactInfo">
            <h3>
              <b>Información de contacto</b>
            </h3>
            <p>
              ¿Tienes alguna pregunta o deseas colaborar con nosotros? Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-telephone-fill"></i> +1 910-626-8523
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i> 123 Fifth Ave, New York, NY 10160
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> realestatexpress2024@gmail.com
              </li>
            </ul>
            <h3>Redes Sociales</h3>
            <p>
              <i className="bi bi-facebook"></i>{" "}
              <i className="bi bi-twitter-x"></i>{" "}
              <i className="bi bi-tiktok"></i>
            </p>
          </div>
        </div>
    
        <div className="col-md-2 col-sm-12 mb-4"></div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default ContactForm;