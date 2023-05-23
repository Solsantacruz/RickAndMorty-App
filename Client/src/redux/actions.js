
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
   return async (dispatch) => {
    try {
      const response = (await axios.post(endpoint, character)).data;
         return dispatch({
            type: 'ADD_FAVORITES',
            payload: response,
         });
    } catch (error) {
      throw Error(error.message)
    }
      };
   };


export const removeFavorites = (id) =>{
    // return {
    //   type: REMOVE_FAVORITES,
    //   payload:  {id}
    // }
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
    try {
      const response = (await axios.delete(endpoint)).data;
         return dispatch({
            type: 'REMOVE_FAVORITES',
            payload: response,
      });
    } catch (error) {
      throw error(error.message);
    }
      
      };
   };
  

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