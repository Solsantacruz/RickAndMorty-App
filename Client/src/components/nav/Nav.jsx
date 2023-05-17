import SearchBar from "../Search/SearchBar";
import style from "./Search.module.css";
import { Link } from "react-router-dom";


const Nav = (props) => {

    return (
        <div className={style.contenedor}>
            <div className={style.search}>
            <SearchBar  
               onSearch={props.onSearch}
               getRandomCharacter={props.getRandomCharacter}
               />   
               
            </div>
            <div className={style.contenedor_link}>
            <Link to="/about" className={style.links}>About</Link>
            <Link to="/home" className={style.links}>Home</Link>
            <Link to="/favoritos" className={style.links}>Favoritos</Link>
        
            </div>
        </div>
    )
}

export default Nav;