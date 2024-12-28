import React, { useState } from 'react'
import "../Styles/Home.css"
import { Latex } from 'react-latex';


const Home = () => {
  const [mostrardrop,setmostrardrop]=useState(false)
  const toggleMostrar = () => {
    setmostrardrop(!mostrardrop);
  };
  return (
    <div className='home'>
      <div className='containerHome'>
        <div className='ImagenInicio'><img className='ImagenLogo' src="/public/Ak.svg" alt="Logo" /></div>
        <span className='textoHome'>Bienvenidos a Akdemicos <br /><h6>"Akdemicos ofrece material académico actualizado 
          y productos diseñados especialmente para estudiantes. Encuentra todo lo que necesitas para tu educación,
           desde guías de estudio hasta herramientas útiles para mejorar tu productividad."</h6></span>
      </div>
    </div>
  );
}

export default Home