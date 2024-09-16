//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from "./views/utils/Nav/Nav"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {QuieSon} from './views/utils/CompAboutUs/QuieSom/QuieSon'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/quieson" element={<QuieSon />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
