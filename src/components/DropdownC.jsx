import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Generales.css"
import { useState } from "react";
import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from "reactstrap";
const DropdownC = ({desplegar}) => {
    const [dropdown,setdropdown]=useState(false)

    const openclose=()=>{
        setdropdown(!dropdown)
    }
    
    return (
        <Dropdown isOpen={dropdown} toggle={openclose} >
            <DropdownToggle>
                {desplegar.capitulo}
            </DropdownToggle>
            <DropdownMenu className="menu">
            {desplegar.secciones.map((seccion)=><DropdownItem>   {seccion}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
      );
    };
             
    export default DropdownC;
    
