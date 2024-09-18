import './App.css'
import QuieSon from './views/utils/CompAboutUs/QuieSom/QuieSon';
import Footer from './views/utils/Footer/Footer'
import Nav from "./views/utils/Nav/Nav"
import MisVis from "./views/utils/CompAboutUs/MisVis/MisVis"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {

  return (
    <>
      <Nav/>
      <QuieSon/>
      <MisVis/>
      <Footer/>
    </>
  )
}

export default App
