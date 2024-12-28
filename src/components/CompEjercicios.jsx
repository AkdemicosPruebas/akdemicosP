import { useState } from "react";
import "../Styles/Generales.css"

const CompEjercicios = ({ejercicio}) => {
    const [verSolution,setverSolution]=useState(false)
    
    const handleSolution = ()=>{
        setverSolution(!verSolution)
    }
    
    return (
      <div className="containerEjercicions">
        
        <div className="enunciado">
            Encuentre el dominio de la funcion (x^2-10x)^(1/2)
        </div>

        <div className="verSolucion" onClick={handleSolution}>
            <img className={verSolution ? 'sinRotar': 'rotarVer'} src="/lista.svg" alt="lista" /><span>Ver solución</span>
        </div>

        <div className={`solution ${verSolution ? 'mostrarSolution':'ocultarSolution' }`}>
            Hola aqui va la solucion de mi ejercicio hshfhsjjjjjh fshjfssss sfhbfshhh sfhjb 
            jfjjjfjg hgg hjgjgjg ghgfjjkfgjg hfghjhj fhjbghjbfjibj gfjbjbjgfjk fgjhbjfjk gnjbgj
            jngjfnjg gfkjnjgf fgjhjgjnoi giufgniroig fgjnfjnjnla fgjgnsfnf gfjnlnlfkglkgf jhnjhgf
            jkgfkngnfg gfjkgfnfg gjfgjfjsoi reiureksa sjnsnf 
        </div>
          
      </div>
    );
};
export default CompEjercicios
