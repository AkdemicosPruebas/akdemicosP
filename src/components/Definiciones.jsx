import "../Styles/Generales.css"
const Definiciones = ({definicion}) => {
    
    return (
        <div className="definicion">
             <div className="def">Definición</div>
             <div className="texdef">{definicion}</div>
        </div>
      );
    };
             
    export default Definiciones;