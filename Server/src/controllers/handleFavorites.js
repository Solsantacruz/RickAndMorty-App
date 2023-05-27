const {Favorite} = require("../DB_connection");

async function postFav(req, res){
    const {name, origin, status, image, species, gender} = req.body;
    // console.log(req.body)
    try {
    if(!name || !origin || !status || !image || !species || !gender)return res.status(401).send("Faltan datos");

     await Favorite.findOrCreate({ where: {name, origin, status, image, species, gender}});

      const myFavorites = await Favorite.findAll();
      return res.status(200).json(myFavorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteFav(req, res){
   const {id} = req.params;
try {
  await Favorite.destroy({where: {id:id}})
  
  const myFavorites = await Favorite.findAll();

  return res.status(200).json(myFavorites);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}


module.exports = {
    postFav, 
    deleteFav,
};



// let myFavorites = [];



// function postFav(req, res){
//     const character = req.body;

//     try {
//         myFavorites.push(character)
//         res.status(200).json(myFavorites);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// function deleteFav(req, res){
//    const {id} = req.params;
// try {
//     myFavorites = myFavorites.filter(character =>
//         character.id !== Number(id)
//        )
    
//        //Lo hago de esta manera porque si en vez de personaje le asigno myFavorite
//        //comienza a agragarme personajes repetidos.
       
//     //    myFavorites = personaje;
//        res.status(200).json(myFavorites);
// } catch (error) {
//     res.status(500).json({ message: error.message });
// }
   
// }