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
    <div>
    <br /><br /><b><br /><br /><br /><br /><br /><br /></b>
    <Contacto />
    <br /><br /><b><br /><br /><br /><br /><br /><br /></b>
    <Footer />
    </div>
    </>
  )
}

export default App
