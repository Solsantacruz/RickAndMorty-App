import SearchBar from "../Search/SearchBar";
// import style from "./Search.module.css";
import { Link, useLocation } from "react-router-dom";
import image from "../imgForm/rym-logo.png";
import style from "./Nav.module.css"


const Nav = (props) => {
    const location = useLocation();

    return (
        <nav className={style.contenedor}>
            <Link to="/home">
        <img className={style.img} src={image} alt="imagen PNG" />
      </Link>
            <div className={style.contenedor_link}>
            <Link to="/home" className={style.links}>Home</Link>
            <Link to="/about" className={style.links}>About</Link>
            <Link to="/favoritos" className={style.links}>Favoritos</Link>
            </div>
            {location.pathname === '/home' && <SearchBar  
               onSearch={props.onSearch}
               getRandomCharacter={props.getRandomCharacter}
               />}

            {location.pathname !== '/home' && <Link/>}
        </nav>
    )
}

export default Nav;