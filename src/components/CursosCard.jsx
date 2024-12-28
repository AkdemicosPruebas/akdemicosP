import CursoCard from "./CursoCard";
import "../Styles/CursosCard.css"

const CursosCard = ({seccionCurso}) => {        
  return (
    <div className="ContainerCursosCard">
      <div className="nombre_lista_cursos">{seccionCurso.nameList}</div> 
      <div className="containerCursos"> {seccionCurso.Cursos.map((Curso,indice)=><CursoCard Curso={Curso} key={indice}/>)}</div>      
    </div>
  );
};
           
export default CursosCard;
