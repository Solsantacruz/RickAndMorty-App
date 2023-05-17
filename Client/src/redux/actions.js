
// export const ADD_CHARACTERS = 'ADD_CHARACTER';
import axios from 'axios';
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES ="REMOVE_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";


 export const addFavorites = (character) => {
    // return {
    //     type: ADD_FAVORITES,
    //     payload: character
    //   }
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAVORITES',
            payload: data,
         });
      });
   };
}

export const removeFavorites = (id) =>{
    // return {
    //   type: REMOVE_FAVORITES,
    //   payload:  {id}
    // }
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({data}) => {
         return dispatch({
            type: 'REMOVE_FAVORITES',
            payload: data,
      });
      });
   };
  }

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }

}

export const orderCards = (id) =>{
  return{
    type: ORDER,
    payload: id
  }
}

export const reset = () => {
  return{
    type: RESET
  }
}