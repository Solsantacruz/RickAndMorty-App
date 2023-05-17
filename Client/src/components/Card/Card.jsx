import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFavorites, removeFavorites } from '../../redux/actions';


   const Card = (props) => {

   const [isFav, setIsFav] = useState(false);
   const { character, myFavorites, onClose } = props;

   const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        if (character && character.id) { // Verificar si character tiene la propiedad id
          props.removeFavorites(character.id);
        }
      } else {
        setIsFav(true);
        props.addFavorites(character);
      }
    };

    useEffect(() => {
      if (myFavorites) {
        myFavorites.forEach((fav) => {
          if (fav.id === character.id) {
            setIsFav(true);
          }
        });
      }
    }, [myFavorites, character.id]);


   return (
      <div className={style.card}>
         <button onClick={onClose} className={style.cerrar}>X</button>
         {isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ):(
         <button onClick={handleFavorite}>🤍</button>
         )}
         <Link to={`/detail/${props.id}`} className={style.link}>
         <h2 className={style.name}>{character.name} </h2>
         </Link>
         <h2 className={style.h2}>{character.species} </h2>
         <h2 className={style.h2}>{character.gender} </h2>
         <img  src={character.image} alt="imagen" className={style.img} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFavorites: (character) => dispatch(addFavorites(character)),
     removeFavorites: (characterId) => dispatch(removeFavorites(characterId))
   }
 };
 
 const mapStateToProps = (state) => {
   return { 
     myFavorites: state.myFavorites
   }
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);