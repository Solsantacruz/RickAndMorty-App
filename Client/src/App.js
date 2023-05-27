import style from './App.module.css'
// import Cards from './components/Cards/Cards.jsx'
import Nav from './components/nav/Nav'
import About from './views/About';
import Home from './views/Home';
import {useState, useEffect} from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Detail from './views/Detail';
import Forms from './components/Forms';
import Favoritos from './components/favoritos/Favoritos';
import axios from 'axios';


function App () {
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const [characters, setCharacters] = useState([]);
const location = useLocation();
// const username = 'proyecto@gmail.com';
// const password = '123prue';

// function login(userData) {
//    if (userData.password === password && userData.username === username) {
//       setAccess(true);
//       navigate('/home');
//    }
// }
 async function login(userData) {
  const { username:  email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try {
    const {data} = await axios(URL + `?email=${email}&password=${password}`);
    const { access } = data;
     setAccess(data);
     access && navigate('/home');
  } catch (error) {
    alert(error.message);
  }}


  // ------ LOGOUT --------

  function logout(event) {
    setAccess(false);
    navigate("/");
  }

useEffect(() => {
  !access && navigate('/');
}, [access]);

//-------- BUSQUEDA DE PERSONAJES ------

const onSearch = async(character) => {
  try {
    const data = await(await fetch(`http://localhost:3001/rickandmorty/character/${character}`)).json();
    if (data.id){
      if (characters.some(char => char.id === data.id)) {
        window.alert('El ID ya está en la lista');
      }else{
      setCharacters([...characters, data]);
    }
  } else{
    window.alert('No hay personajes con ese ID');
    }
  } catch (error) {
    alert(error.message)
  }
  
  };

  // -------------- PERSONAJE RANDOM -----------------

  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826 ) + 1;
    onSearch(randomId);
  
  };


  // ----------------BOTON CIERRE CARD ---------

  const onClose = (id) => {
    const nueCharacters = characters.filter((character) => character.id !== id);
    setCharacters(nueCharacters);
   };


    
 
  return (
    
      <div className={style.App}>
        {location.pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          getRandomCharacter={getRandomCharacter}
          logout={logout}
        />
      )}


      <Routes>
      {/* <Route path="/" element={<Nav/>} /> */}
      <Route path="/" element={<Forms 
      login={login}/>} />
      <Route path= "/home" element={<Home characters={characters} onClose={onClose} />} />
      <Route path="/about" element={<About/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/favoritos" element={<Favoritos/>} />
      </Routes>
    
</div>

  )
}

export default App
