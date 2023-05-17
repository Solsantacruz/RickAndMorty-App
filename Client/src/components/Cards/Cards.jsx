import Card from '../Card/Card';
import style from './Cards.module.css';



const Cards = (props) =>{
   const { characters } = props;

   return (
   <div className={style.contenedor}>
      {/* lo comentado es mi codigo, voy a probar con el codigo de gama por probar
      si hay un error en mi mapeo  */}
      {characters?.map((character)=> {
         
         return(
            
            <Card onClose={() => props.onClose(character.id)}
            
             key={character.id}
             id={character.id}
            //  name={character.name}
            //  species={character.species} 
            //  gender={character.gender} 
            //  image={character.image} 
            character={character}
             
             />
         ) 
      })}

      
      {/* {characters?.map((character) => {
        return(
        <Card key={character.id} character={character} onClose={() => props.onClose(character.id)} 
        
        codigo de gama
        />
      )})} */}
   </div>
   )
}


export default Cards;