import "../Styles/AboutMe.css"
const AboutMe = () => {
    return (
      <div className="containerAboutme">
          <div className="contenidoAbout">
            <div className="ImagenAbout">
              <img className="FotoAbout" src="/public/Yo.svg" alt="yo" />
            </div>
            <div className="textoAbout">
              <span>Soy <b>Luis Alberto Seña Ávila</b>, físico egresado de la universidad de Córdoba de Colombia en el año 2024.  
                Me gustan las matemáticas, la física y la programción. Akdemicos es un sitio web que cree con el
                fin de compartir  material académico y algunas de mis creaciones. <br /><br />
                Me gusta la docencia, creo en el poder de la educación libre y en compartir el conocimiento para mejorar nuestras habilidades.
                <br /><br />
                Tengo cerca de 3 años de experiencia trabajando con tecnologías como JavaScript, React y Node.js
              </span>
            </div>
          </div>
      </div>
    );
};
export default AboutMe