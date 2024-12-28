import React, { useState } from 'react'
import "../Styles/Generales.css"
const CompDropdown = ({desplegar,referencia1,funciones}) => {
    const [mostrardrop,setmostrardrop]=useState(false)
    const toggleMostrar = () => {
        setmostrardrop(!mostrardrop);
    };
   
    console.log(desplegar);
    
        
    return (
        <div className='dropdown_list'>
            <div className="dropdown_link" onClick={toggleMostrar}>
               <img className={`lista ${mostrardrop ? 'rotar' : ''}`} src="/public/bx-chevron-right.svg" alt="lista" />
               <span className='dropcapitulo' onClick={()=>{
                    funciones.current?.scrollIntoView({behavior:"smooth"})}}>{desplegar.nameTema}</span>
            </div>
            <ul className={mostrardrop ? 'dropdown_sub_mos':"dropdown_sub"}>
                {desplegar.subTema.map((seccion,item)=><li key={item} className='subtema' onClick={()=>{
                    referencia1.current?.scrollIntoView({behavior:"smooth"})}}>{seccion}</li>)}
            </ul>  
        </div>
      );
    }           
    export default CompDropdown;
    
