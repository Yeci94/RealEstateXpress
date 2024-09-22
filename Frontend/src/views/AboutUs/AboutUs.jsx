import "./AboutUs.css";
import QuieSon from "../utils/CompAboutUs/QuieSom/QuieSon";
import Footer from "../utils/Footer/Footer";
import Nav from "../utils/Nav/Nav";
import MisVis from "../utils/CompAboutUs/MisVis/MisVis";
import Valores from "../utils/CompAboutUs/Valores/Valores";
import Integrantes from "../utils/CompAboutUs/Integrantes/Integrantes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AboutUs() {
  return (
    <>
      <Nav />
      <div class="contenedor-app">
        <QuieSon />
        <MisVis />
        <Valores />
        <br></br>
        <br></br>
        <Integrantes />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
