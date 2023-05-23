const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";


async function getCharById(req, res){

    const {id} = req.params;

    try {
        const response = (await axios.get(`${URL}${id}`)).data;
        const character = {
            id: response.id,
            name: response.name,
            image: response.image,
            gender: response.gender,
            status: response.status,
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getCharById;










// function getCharById(res, id) {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const {id, image, gender, species, name, origin, status} = response.data;

//         res
//         .writeHead(200, {'Content-Type': 'application/json'})
//         .end(JSON.stringify({id, image, gender, species, name, origin, status}))
//     })
//         .catch((error)=>{
//             res.writeHead(500, {'Content-Type': 'text/plain'}).end(error.message)
//         })
        
// }




// axios.get(`${URL}${id}`)
    //     .then(response => {
    //         const {id, image, gender, species, name, origin, status} = response.data;
    //         const character = { id, status, name, species, origin, image, gender };

    //         if(character.name){
    //             return res.status(200).json(character);
    //         }
    //         else{
    //             res.status(404).send("No existe el personaje")
    //         }

    //     })
    //     .catch((error)=>{
    //     res.status(500).json({ message: error.message });
    //     })