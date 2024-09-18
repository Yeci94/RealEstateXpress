import './App.css'
import QuieSon from './views/utils/CompAboutUs/QuieSom/QuieSon';
import Footer from './views/utils/Footer/Footer'
import Nav from "./views/utils/Nav/Nav"
import MisVis from "./views/utils/CompAboutUs/MisVis/MisVis"
import Valores from "./views/utils/CompAboutUs/Valores/Valores"
import Integrantes from './views/utils/CompAboutUs/Integrantes/Integrantes';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <Nav/>
      <div class="contenedor-app">
      <QuieSon/>
      <MisVis/>
      <Valores/>
      <br></br>
      <br></br>
      <Integrantes/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
