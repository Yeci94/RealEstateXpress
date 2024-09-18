import "./QuieSon.css";

function QuieSon() {
  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4">Acerca de Nosotros</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 class="tittle-general">¿Quiénes Somos?</h4>
            <p>
              Somos un equipo dedicado a transformar la manera en que se
              adquieren terrenos en florida, creemos que invertir en bienes
              raíces debe ser un proceso sencillo, seguro y accesible. Por eso,
              desarrollamos una plataforma intuitiva y novedosa donde nuestros
              clientes compren 100% online. Facilitando todo el proceso desde la
              selección del terreno hasta la recepción de la propiedad.
            </p>
          </div>
          <div className="col-md-6">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="Img/1.jpg"
                    className="d-block w-100"
                    alt="Propiedad 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="Img/5.jpg"
                    className="d-block w-100"
                    alt="Propiedad 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="Img/3.jpg"
                    className="d-block w-100"
                    alt="Propiedad 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="Img/4.jpg"
                    className="d-block w-100"
                    alt="Propiedad 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default QuieSon;
