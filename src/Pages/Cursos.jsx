import CursosCard from "../components/CursosCard";
import ListaCursos from '../utils/Cursos.json'
import "../Styles/CursosCard.css"
import Footer from "../Pages/Footer";
const Cursos = () => {
  return (
    <div className="containerPrincipal">
        {ListaCursos.map(
          (seccionCurso,indice)=>
        <CursosCard seccionCurso={seccionCurso} key={indice}/>
      )}
    </div>
  );
};
         
export default Cursos;
