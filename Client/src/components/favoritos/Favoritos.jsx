// import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import NavSuplente from "../nav/NavSuplente";
// import style from "../Cards/cards.module.css";
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

    // const { myFavorites} = props;

    return(
        <div >
            <NavSuplente />

        <select placeholder="Order" onChange={handleOrder}>
          <option value="Ascendente"> Ascendente </option>
          <option value="Descendente"> Descendente </option>
        </select>   

         <select placeholder="Gender" onChange={handleFilter}>
         {["Male", "Female", "unknown", "Genderless"].map((gender) =>(
            <option value= {gender}> {gender} </option>
         ))}
        </select> 
        <button value="reset" onClick={handleReset}> RESET </button>
        <Cards characters= {favorites} />

         {/* {myFavorites?.map((character)=> {
           
           return(  
              <Card
               id={character.id} 
               character={character} />
           ) 
        })}  */}
     </div>
    )
}

export default Favoritos; 