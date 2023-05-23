let myFavorites = [];



function postFav(req, res){
    const character = req.body;

    try {
        myFavorites.push(character)
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    

}

function deleteFav(req, res){
   const {id} = req.params;
try {
    myFavorites = myFavorites.filter(character =>
        character.id !== Number(id)
       )
    
       //Lo hago de esta manera porque si en vez de personaje le asigno myFavorite
       //comienza a agragarme personajes repetidos.
       
    //    myFavorites = personaje;
       res.status(200).json(myFavorites);
} catch (error) {
    res.status(500).json({ message: error.message });
}
   
}


module.exports = {
    postFav, 
    deleteFav,
};