import "./App.css";
import {BrowserRouter as Router,Route,Routes,useNavigate,} from "react-router-dom";
import Inicio from "./views/Inicio/Inicio";
import AboutUs from './views/AboutUs/AboutUs'
import Contacto from './views/Contacto/Contacto'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Contacto" element={<Contacto/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App
