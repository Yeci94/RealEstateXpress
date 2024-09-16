
import imagen1 from '../../../../assets/img/1.jpg';
import imagen2 from '../../../../assets/img/2.jpg';
import imagen3 from '../../../../assets/img/3.jpg';
import imagen4 from '../../../../assets/img/4.jpg';
import './QuieSon.css';

export function QuieSon() {
    return (
        <section className="about-us py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Acerca de Nosotros</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h4>¿Quiénes Somos?</h4>
                        <p>
                            Somos un equipo dedicado a trasformar la manera en que se adquieren terrenos en florida, creemos que invertir en bienes raices debe ser un proceso sencillo, seguro y accesible. Por eso desarrolamos una plataforma intuitiva y novedosa donde nuestros clientes compren 100% oline. faciltando todo el proceso de desde la seleccion del terreno hasta la recepcion de la propiedad.
                        </p>

                    </div>
                    <div className="col-md-6">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={imagen1} className="d-block w-100" alt="Propiedad 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen2} className="d-block w-100" alt="Propiedad 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen3} className="d-block w-100" alt="Propiedad 3" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen4} className="d-block w-100" alt="Propiedad 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
