// import { useState } from "react";
import Cards from '../components/Cards/Cards.jsx'
// import Nav from '../components/nav/Nav'



const Home = ({characters, onClose}) => {
    // const [characters, setCharacters] = useState([]);
//Conecta a la api

  //  const onSearch = async(character) => {
  //   try {
  //     const data = await(await fetch(`http://localhost:3001/rickandmorty/character/${character}`)).json();
  //     if (data.id){
  //       if (characters.some(char => char.id === data.id)) {
  //         window.alert('El ID ya está en la lista');
  //       }else{
  //       setCharacters([...characters, data]);
  //     }
  //   } else{
  //     window.alert('No hay personajes con ese ID');
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   }
    
  //   };
   
  


  //  const onSearch = async(character) => {
    // fetch(`http://localhost:3001/rickandmorty/character/${character}`)
    // .then(res=>res.json())
    // .then((data)=>{
    //   if (data.id){
    //     if (characters.some(char => char.id === data.id)) {
    //       window.alert('El ID ya está en la lista');
    //     }else{
    //     setCharacters([...characters, data]);
    //   }
    // } else{
    //   window.alert('No hay personajes con ese ID');
    //   }
    // });
  //  };
  

// Funcion para borrar la tarjeta
  //  const onClose = (id) => {
  //   const nueCharacters = characters.filter((character) => character.id !== id);
  //   setCharacters(nueCharacters);
  //  };

// Funcion de boton personaje aleatorio  
    // const getRandomCharacter = () => {
    //       const randomId = Math.floor(Math.random() * 826 ) + 1;
    //       onSearch(randomId);
        
    //     };
    
        
    return(
        <div>
            {/* <Nav onSearch = {onSearch}
             getRandomCharacter={getRandomCharacter}/> */}
      
            <Cards
            characters={characters}
            onClose={onClose}
           />
      
        </div>
    )
};

export default Home;