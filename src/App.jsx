import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Cursos from './Pages/Cursos';
import AboutMe from './Pages/AboutMe';
import CalculoDiferencial from './Pages/CalculoDiferencial';
import Footer from './Pages/Footer';
import CompEjercicios from './components/CompEjercicios';

function App() {

  return (
    <HashRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/proyectos' element={<CompEjercicios/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='/cursos/CalculoDiferencial' element={<CalculoDiferencial/>}/>
        </Routes>
      <Footer/>      
    </HashRouter>
  );    
  
}

export default App
