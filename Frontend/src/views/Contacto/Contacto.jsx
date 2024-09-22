import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contacto.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mvgpjpjk");
  
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  
  return (
    <div className="container-fluid">
        <div className="text-center">
            <h2 className="text"><strong>Pongase en contacto con nosotros</strong></h2>
        </div>
        <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="full-name">Envianos un mensaje</label>
                    <input id="full-name" type="text" name="full-name" placeholder="Ingrese su nombre completo" />
                    <ValidationError prefix="Nombre Completo" field="full-name" errors={state.errors} />
                    <input id="phone" type="number" name="phone" placeholder="Ingresa tu número de teléfono" />
                    <ValidationError prefix="Número de Teléfono" field="phone" errors={state.errors} />
                    <input id="email" type="email" name="email" placeholder="Ingrese su correo electronico"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <textarea id="message" name="message" placeholder="Dejanos tu comentario"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <button type="submit" disabled={state.submitting}> Enviar </button>
                </form>
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <h3><b>Información de contacto</b></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-telephone-fill"></i> +1 910-626-8523</li>
                  <li><i className="bi bi-geo-alt-fill"></i> 123 Fifth Ave, New York, NY 10160</li>
                  <li><i className="bi bi-envelope-fill"></i> contact@hello.com</li>
                </ul>
        <h3>Redes Sociales</h3>
        <p><i className="bi bi-facebook"></i> <i className="bi bi-x"></i> <i className="bi bi-tiktok"></i></p>
            </div>
        </div>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
