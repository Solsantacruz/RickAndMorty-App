import imgLanding from "../imgForm/rickymortylogoform-removebg.png";
import style from "./landing.module.css";


export default function Landing () {
   return(
<>
    <div className={style.logo}>
        <img className= {style.img} src={imgLanding} alt="rickandmorty-logo"/>
        <h2 className={style.h2}> App </h2>
        <h4> By Sol Santa Cruz </h4>
    </div>



</>


   )
}