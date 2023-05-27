import style from "./About.module.css";
import imgTitulo from "./imgForm/Rick-And-Morty-Letras-removebg.png"

const AboutText = () => {

    return (
        <>
        <img className={style.img} src={imgTitulo} alt="imagen"/>
        <div className={style.contenedor} >
          <p className={style.titulo} > Mi nombre es Sol Santa Cruz Desarrolladora Web Full Stack Developer.</p>
          <p className={style.parrafos}>Apasionada de la tecnoligía busco combinar creatividad y habilidades técnicas para construir soluciones digitales impactantes y funcionales.</p>
           <p className={style.parrafos}> Esta APP fue creada con tecnologias como React.js, Redux, Express y PostgreSQL. Esta enfocada en la serie televisiva Rick and Morty, puedes buscar mas de 800 personajes y visualizar información detalladas de los mismos. También te permite seleccionar tu personaje favorito, filtrarlos por generos y ordenarlos por nombre de manera ascendente o descendente segun lo prefieras </p>
           <h3 className={style.parrafos}>¡ Espero que tu experiencia sea mas que satisfactoria y lo disfrutes !</h3>
        </div>
     </>
    )

 }

 export default AboutText;