import style from './App.module.css'
// import Cards from './components/Cards/Cards.jsx'
// import Nav from './components/nav/Nav'
import About from './views/About';
import Home from './views/Home';
import {useState, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './views/Detail';
import Forms from './components/Forms';
import Favoritos from './components/favoritos/Favoritos';
import axios from 'axios';


function App () {
const navigate = useNavigate();
const [access, setAccess] = useState(false);
// const username = 'proyecto@gmail.com';
// const password = '123prue';

// function login(userData) {
//    if (userData.password === password && userData.username === username) {
//       setAccess(true);
//       navigate('/home');
//    }
// }
function login(userData) {
  const { username:  email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(data);
     access && navigate('/home');
  });
}

useEffect(() => {
  !access && navigate('/');
}, [access]);
    
 
  return (
    
      <div className={style.App}>
      <Routes>
      {/* <Route path="/" element={<Nav/>} /> */}
      <Route path="/" element={<Forms 
      login={login}/>} />
      <Route path= "/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/favoritos" element={<Favoritos/>} />
      </Routes>
    
</div>

  )
}

export default App
