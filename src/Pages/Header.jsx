import React from 'react'
import "../Styles/Header.css"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [MostrarCursos, setMostrarCursos] = useState(false)
  const [MostrarMenu, setMostrarMenu] = useState(false)
  const actualizarAnchoVentana = () => {
    setAnchoPantalla(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', actualizarAnchoVentana);
    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    };
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mostrarCursos=()=>{
    setMostrarCursos(~MostrarCursos)
  }
  const mostrarMenu=()=>{
    setMostrarMenu(~MostrarMenu)
    setMostrarCursos(false)
  }

  return (
    <header>
        
        <div className='conten-principal'>
          <div className='principal'>
              <div className='redes'>
                  <ul>
                      <li><a href="https://www.facebook.com/?locale=es_LA"></a><i className='bx bxl-facebook'></i></li>
                      <li><a href=""><i className='bx bxl-instagram'></i></a></li>
                      <li><a href=""></a><i className='bx bxl-youtube'></i></li>
                  </ul>
              </div> 
              <div className='entrar'>
                <Link to={"/login"}> {anchoPantalla<350?<div><i className='bx bx-log-in'></i></div>: <div>Acceder a mi cuenta</div> }</Link>
              </div>
          </div>
        </div>
        

        <div className={  isScrolled ? 'div-secundario scrolled ' : 'div-secundario'}>
        <div className='secundario'>
          <Link to={"/"} ><div className='logo'><img src="/Akademicos.svg" alt="Logo" /></div></Link>
        
          <nav>
            {anchoPantalla<769 ?( 
            <div className='menu-barr'><i onClick={mostrarMenu} className='bx bx-menu'></i>
            <div className={MostrarMenu? 'horizontal1':'ocultar-menu'}>
                <ul className='vertical1'>
                  <li>Proyectos</li>
                  <li onClick={mostrarCursos}>Cursos  <i className='bx bx-chevron-down'></i></li>
                  <ul className={MostrarCursos?'lista-cursos ':'lista-cursos mostrar-cursos'}>
                      <li>Cálculos</li>
                      <li>Física básica</li>
                      <li>Física avanzada</li>
                    </ul>
                  <li>Libros</li>
                  <li>Sobre mi</li>
                  <li>Tienda</li>
                </ul>
              </div>
              </div> 
            
            
            ):(<ul className='menu-horizontal'>
              <li><a href="">Proyectos</a></li>
              <li>
                <a className='trian-curso' href=""> <span className='ali'>Cursos  <img src="/public/Lista.svg" alt="Lista" /></span></a>
                <ul className='horizontal'>
                  <li>
                    <ul className='vertical'>
                    <a className='title' href="">Cálculo</a>
                    <ul className='lista2'>
                    <a href=""><div className='Itriangulo'></div>Cálculo diferencial</a>
                      <a href=""><div className='Itriangulo'></div>Cálculo integral</a>
                      <a href=""><div className='Itriangulo'></div>Cálculo vectorial</a>
                    </ul>
                      
                    </ul>                    
                  </li>

                  <li>
                    <ul className='vertical'>
                      <a className='title' href="">Física básica</a>
                      <ul className={MostrarCursos?('lista2 mostar-cursos'):('lista2')}>
                        <a href=""><div className='Itriangulo'></div>Física mecánica</a>
                        <a href=""><div className='Itriangulo'></div>Física eléctrica</a>
                        <a href=""><div className='Itriangulo'></div>Física del magnetisto</a>
                      </ul>
                      
                    </ul>                    
                  </li>
                  
                  <li>
                    <ul>
                      <a className='title' href=""> Física avanzada</a>
                    </ul>
                  
                  </li>
                </ul>
              </li>
              <li><a href="">Libros</a></li>
              <li><a href="">Sobre mi</a></li>
              <li><a href="">Tienda</a></li>
            </ul>)}
            
          </nav>
        </div>
        </div>
        
      
    </header>
  );
};

export default Header;
