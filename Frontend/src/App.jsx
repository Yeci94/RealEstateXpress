import "./App.css";
import {BrowserRouter as Router,Route,Routes,useNavigate,} from "react-router-dom";
import Inicio from "./views/Inicio/Inicio";
import AboutUs from './views/AboutUs/AboutUs'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
