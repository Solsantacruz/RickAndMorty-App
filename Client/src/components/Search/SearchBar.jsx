import style from '../nav/Search.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState("");

      const onChange = (event) => {
         // event.preventDefault();
         setId(event.target.value);  
      }

     const handleSearch = (event) => {
      event.preventDefault();
    // Guardar el valor del input en tu aplicación
     props.onSearch(id);
     // Restablecer el valor del input a su estado inicial
     setId("");
     }

   return (
         <div>
         <input type='search' onChange={onChange} className={style.input} />
         <button onClick={handleSearch} className={style.boton}>Agregar</button>
         <button onClick={() => {props.getRandomCharacter(id)}}className={style.boton}>Agregar aleatorio </button>
         </div>
   );
}
