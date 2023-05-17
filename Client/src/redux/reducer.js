import {ADD_FAVORITES, REMOVE_FAVORITES, FILTER, ORDER, RESET} from "./actions.js";

const initialState = {
   myFavorites: [],
   allCharacters: [], // copia de favoritos
}

const rootReducer = (state= initialState, action) => {

    switch(action.type){
        case ADD_FAVORITES:
            const add = [...state.myFavorites, action.payload]
            return {
                ...state,
                myFavorites: [...add], 
                allCharacters: [...add]
              }
            // return { ...state, myFavorites: action.payload, 
            //         allCharacters: action.payload };
              
        case REMOVE_FAVORITES:
            return { ...state, myFavorites: action.payload };

                // const filteredFavorites = state.myFavorites.filter(
                //   favorite => favorite.id !== action.payload.id
                // )
            // return {
            //       ...state,
            //       myFavorites: [...filteredFavorites],
            //       allCharacters: [...filteredFavorites]
            //  }
            // return {
            //     ...state,
            //     myFavorites: action.payload,
            //     allCharacters: action.payload
            //   };
            
        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter(
                    (character) => character.gender === action.payload
                ),
            };

        case ORDER:
        let sorted;
        if(action.payload === 'Ascendente'){
            sorted = state.myFavorites.sort((a, b)=> (a.id > b.id ? 1 : -1));
        } else if (action.payload === 'Descendente') {
            sorted = state.myFavorites.sort((a, b)=> (a.id < b.id ? 1 : -1));
        }
            return{
                ...state,
                myFavorites: [...sorted]
            }

        case RESET:
            return{
                ...state,
                myFavorites: state.allCharacters,
            }

        default:
            return state;
    }
}

export default rootReducer;