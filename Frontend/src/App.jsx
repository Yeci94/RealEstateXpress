//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./views/utils/Nav/Nav"
import Footer from "./views/utils/Footer/Footer"
import Contacto from "./views/Contacto/Contacto"

function App() {
  return (
    <>
    <Nav />
    <div className='contenedor-app'>
    <Contacto />
    </div>
    <Footer />
    
    </>
  );
}

export default App
