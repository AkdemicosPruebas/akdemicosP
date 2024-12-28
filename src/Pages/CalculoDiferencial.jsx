import "../Styles/CalculoDiferencial.css"
import React, { useRef, useState } from "react"
import VideoModal from "../components/VideoModal" 
import Definiciones from "../components/Definiciones"
import CompDropdown from "../components/CompDropdown"
import ListCursos from "../utils/Cursos.json"
const CalculoDiferencial = () => {
    
    const videoUrl = "https://www.youtube.com/watch?v=bhUzBX7Ra1c";
    
    
    const objeto={capitulo:"Funciones", secciones:["Definiciones","Funciones Basicas"]}   
    const referencia1=useRef(null)
    const funciones=useRef(null)
         
    return (
      <div className="maxContenedor">
        <div className='ContainerPrincipal'>
          <div className="indice">
            <div className="fijo">
              <h3 className="indiceName">Contenido</h3>
              {ListCursos[0].Cursos[0].temas.map((tema)=><CompDropdown funciones={funciones} referencia1={referencia1} desplegar={tema}/>)}     
            </div>                         
          </div>

          <div className="contenido">
            <h2 className="titlePrincipal">Calculo Diferencial</h2>
            <h3 className="capitulo" ref={funciones}>1. Funciones</h3>          
        
            <Definiciones definicion={<p className="texto">Una función es una relación en la que a cada elemento <img className="imagen" src="/x.svg" alt="x" /> de un conjunto llamado <b>Dominio</b> le corresponde uno y sólo un
            elemento llamado <img className="imagen" src="/fx.svg" alt="f(x)" /> de otro conjunto llamado <b>Rango</b>.</p>}/>
            

            <div className="texto"><span className="colorSubtitle">Prueba de la línea vertical</span>: Una curva en el plano xy representa una función de <img className="imagen" src="/x.svg" alt="x" /> si y sólo si toda línea vertical corta a la curva en máximo solo un punto.</div>
         
              <Definiciones definicion={<div className="texto"><span className="colorSubtitle"> Funciones definidas a tramos</span>: Las funciones definidas a tramos también llamadas funciones definidas por partes o seccionalmente
                definidas, son funciones que tienen formulas diferentes en diferentes partes de su dominio. <br /><div className="containerImagenDef"><img className="imagenCenter" src="/partes.svg" alt="atramos"/></div></div>  }/>
           
        <Definiciones definicion={<div className="texto"><span className="colorSubtitle"> Funciones creciente y decreciente</span>:<br/><b>Funcion creciente</b>: una función es creciente en un intervalo I si <br/> <div className="containerImCreciente"><img className="imagen" src="/creciente.svg" alt="creciente"/></div>
        <b>Funcion decreciente</b>: una función es creciente en un intervalo I si <br /><div className="containerImCreciente"><img src="/decreciente.svg" alt="decreciente"/></div></div>}/>

        <Definiciones definicion={<div className="texto"><span className="colorSubtitle">Función par e impar</span> <br /><b>Función par</b>: Si una función cumple que <img className="imagen" src="/par.svg" alt="fpar" /> para todo <img className="imagen" src="/x.svg" alt="x" /> en su dominio, se dice que es Par. La grafica de una función par
        es simétrica respecto al eje y. <br/><b>Función Impar</b>: i una función cumple que <img className="imagen" src="/impar.svg" alt="fimpar"/> para todo <img className="imagen" src="/x.svg" alt="x"/> en su dominio, se dice que es Impar. La gráfica de una función impar es simétrica respecto a el origen.</div>}/>
        
        {/* ------------------------------------------seccion funciones basicas-------------------------------------------------------------- */}

        <h2 className="seccion" ref={referencia1}>1.1 Funciones Básicas</h2>

        <div className="texto">Las funciones polinomicas tienen la forma <div className="containerImCreciente"><img src="/polinomica.svg" alt="polinomica"/></div> donde n ≥ 0, los a<sub>n</sub> son llamados coeficientes del polinomio y n el grado del poliniomio. El dominio de toda función polinómica es 
         <b> ℝ</b>. A continuación se estudiaran las principales funciones polinómicas.</div>
        
        <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Constante</span> : La funcíon constante es una función polinomica de grado 0 y su grafica es una recta horizontal <div className="fconstante"><img src="/fconstante.svg" alt="constante" /></div></div>
    
        <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Lineal</span> : La funcíon lineal es una función polinómica de 1<sup>er</sup> grado y su grafica es una linea recta. La ecuación en la forma
        pendiente-intercepto de una función lineal es <div className="containerImCreciente"><img src="/flineal.svg" alt="" /></div>Donde m es la pendiente de la recta y mide el grado de inclinación de ésta, y b es el intercepto de la recta con el eje y. Si m &lt; 0 la recta es decreciente, si m  &gt; 0 la recta es creciente y si m es indefinida la reccta es vertical (Una recta vertical no es una función de x).
        <br /> <br />Puesto que por dos puntos diferentes puede pasar una y solo una recta, entonces, dados dos puntos <img className="imagen" src="/puntosP.svg" alt="puntos" />, la
pendiente de de la recta que pasa por dichos puntos viene dada por:<div className="containerImCreciente"><img src="/pendiente.svg" alt="pendiente"/></div> <br />Si x<sub>1</sub> = x<sub>2</sub> la pendiente es indefinida y la recta es vertical. <br />La ecuación en la forma punto-pendiente de esta recta se escribe como <div><img src="/flineal_1.svg" alt="" /></div>
 </div>

   
        <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Cuadrática</span> : La función cuadrática es una funcion polinomica de 2<sup>do</sup> grado y tiene la forma <div className="containerImCreciente"><img src="/cuadratica.svg" alt="" /></div>
        La grafica de una función cuadrática es una parabola concaba hacia arriba si a &gt; 0 y concaba hacia abajo si a &lt; 0, y su vertice estará ubicado en el punto <img className="imagen" src="/vertice.svg" alt="vertice" /> y será simetritrica respecto a la linea vertical <img className="imagen" src="/rsimetrica_1.svg" alt="simetrica"  />
        </div>

        <div className="texto"><div className="item"></div><span className="colorSubtitle">Función Cúbica</span> : La función cúbica es una funcion polinomica de 3<sup>er</sup> grado y tiene la forma <div className="containerImCreciente"><img src="/cubica.svg" alt="" /></div></div>

       
        </div>          
      </div>
    </div>
      
      
    )
  }
  export default CalculoDiferencial
