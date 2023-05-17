import style from "./About.module.css";

const AboutText = () => {

    return (
       
        <div>
        <h1 className={style.titulo} >Rick & Morty</h1>
    

        <div className={style.contenedor} >
            
           <p className={style.parrafos} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nesciunt voluptates reiciendis,ipsam recusandae omnis, impedit officia consequatur iusto ullam, molestias eius. Rem dolor fuga ea. Molestiae velit explicabo eos. </p>

           <p className={style.parrafos} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nesciunt voluptates reiciendis, ipsam recusandae omnis, impedit officia consequatur iusto ullam, molestias eius. Rem dolor fuga ea. Molestiae velit explicabo eos. </p>

           <p className={style.parrafos} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nesciunt voluptates reiciendis, ipsam recusandae omnis, impedit officia consequatur iusto ullam, molestias eius. Rem dolor fuga ea. Molestiae velit explicabo eos. </p>
        </div>
        </div>
    )

 }

 export default AboutText;