import React from 'react'
import "../Styles/Header.css"
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [MostrarMenu, setMostrarMenu] = useState(false)
  const location = useLocation(); // Obtenemos la ubicación actual de la URL
  const menuItems = document.querySelectorAll('.amima');
  useEffect(() => {
    if (location.pathname.includes('/login')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('login').classList.add('active')
    } else if (location.pathname.includes('/proyectos')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('proyectos').classList.add('active')
    } else if (location.pathname.includes('/cursos')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('cursos').classList.add('active')
    }else if (location.pathname.includes('/about-me')) {
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('about').classList.add('active')
    }
    else{
      menuItems.forEach(i => i.classList.remove('active'));
      document.getElementById('home').classList.add('active') 
    }
  }, [location]); 
 

  return (
    <header>
        <div className='div-secundario scrolled '>
        <div className='secundario'>
          <Link to={"/"} ><div className='logo'><img src="/public/Akademicos.svg" alt="Logo" /></div></Link>
        
          <nav>
            <ul className='menu-horizontal'>
              <li><Link to={"/"} ><span className='amima' id='home'>Home</span></Link></li>
              <li><Link to={"/proyectos"} ><span className='amima' id='proyectos'>Proyectos</span></Link></li>
              <li><Link to={"/cursos"} ><span className='amima' id='cursos'>Cursos</span></Link></li>              
              {/* <li><Link to={""} ><span   className='amima'>Libros</span></Link></li> */}
              <li><Link to={"/about-me"} ><span className='amima' id='about'>Sobre mi</span></Link></li>
              {/*<li><Link to={""} ><span className='amima'>Tienda</span></Link></li>*/}
              <li><Link to={"/login"} ><span className='amima' id='login'>Login</span></Link></li>
            </ul>
          </nav>
        </div>
        </div>            
    </header>
  );
};

export default Header;
