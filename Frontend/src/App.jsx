//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Footer from './views/utils/Footer/Footer'
import Nav from "./views/utils/Nav/Nav"

=======
import { Nav } from "./views/utils/Nav/Nav"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {QuieSon} from './views/utils/CompAboutUs/QuieSom/QuieSon'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
>>>>>>> 31e974c4c8ac98053b97d5aafeca3081e424731b

function App() {

  return (
<<<<<<< HEAD
    <>
  <Nav/>
  
  <Footer/>
    </>
=======
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/quieson" element={<QuieSon />} />
        </Routes>
      </div>
    </Router>

>>>>>>> 31e974c4c8ac98053b97d5aafeca3081e424731b
  )
}

export default App
