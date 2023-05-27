// import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./favoritos.module.css";
import { useDispatch, useSelector } from "react-redux";
import {reset, orderCards, filterCards} from '../../redux/actions';


const Favoritos = (props) => {

  const dispatch = useDispatch();
  const  favorites = useSelector(state => state.myFavorites);


  function handleOrder(e){
    dispatch(orderCards(e.target.value))
  }

  function handleFilter(e){
    dispatch(filterCards(e.target.value))
  }

  function handleReset(e){
    dispatch(reset());
  }

    return(
      <>
        <div className={style.contenedor}>
        <select placeholder="Order" onChange={handleOrder} className={style.boton}>
          <option value="Ascendente"> Ascendente </option>
          <option value="Descendente"> Descendente </option>
        </select>   

         <select placeholder="Gender" onChange={handleFilter} className={style.boton}>
         {["Male", "Female", "unknown", "Genderless"].map((gender) =>(
            <option value= {gender}> {gender} </option>
         ))}
        </select> 
        <button value="reset" onClick={handleReset} className={style.boton}> RESET </button>
        </div>
        <Cards characters= {favorites}/>

         {/* {favorites?.map((character)=> {
           
           return(  
              <Card
               id={character.id} 
               character={character} />
           ) 
        })}  */}
     
     </>
    )
}

export default Favoritos; 