let myFavorites = [];



function postFav(req, res){
    const character = req.body;
    myFavorites.push(character)
    res.status(200).json(character);

}

function deleteFav(req, res){
   const {id} = req.params;

    personaje = myFavorites.filter(character =>
    character.id !== Number(id)
   )

   //Lo hago de esta manera porque si en vez de personaje le asigno myFavorite
   //comienza a agragarme personajes repetidos.
   
   myFavorites = personaje;
   res.status(200).json(myFavorites);
}


module.exports = {
    postFav, 
    deleteFav,
};