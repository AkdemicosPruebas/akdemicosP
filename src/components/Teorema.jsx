import "../Styles/Generales.css"
const Teorema = ({definicion}) => {
    
    return (
        <div className="Teorema">
             <div className="def">Definición</div>
             <p>{definicion}</p>
        </div>
      );
    };
             
    export default Teorema;