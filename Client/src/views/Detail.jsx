import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import Card from "../components/Card/Card";
import style from "../components/Detail.module.css"; 
import NavSuplente from "../components/nav/NavSuplente";

const Detail = (props) => {
 const {id} = useParams(); 
 const [character, setCharacter] = useState({});

 useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);
    return(    
        <div>
            <h2 className={style.titulo}>Esta es la ficha del ID: {id} </h2>
            <div className={style.contenedor}>
            <Link to="/home" className={style.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
             </svg>
          </Link>
            <h1 className={style.h1}>{character.name}</h1>
            <img src={character.image} alt="nombre" />
            <h1 className={style.h1}>Status: {character.status}</h1>
            <h1 className={style.h1}>Species: {character.species}</h1>
            <h1 className={style.h1}>Gender: {character.gender}</h1>
            <h1 className={style.h1}>Origin: {character.origin?.name}</h1>
                
             </div>
        </div> 
    )
};

export default Detail;