import image from "../imgForm/rym-logo.png";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";


const NavSuplente = () => {

    return (
        <div className={style.contenedor_links}>
            <Link to="/home">
        <img className={style.img} src={image} alt="imagen PNG" />
        </Link>
            <Link to="/about" className={style.links} >About</Link>
            <Link to="/home" className={style.links} >Home</Link>
            <Link to="/favoritos" className={style.links}>Favoritos</Link>
        
        </div>
    )
}

export default NavSuplente;