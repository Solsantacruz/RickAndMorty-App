// const registro = require('../utils/users.js')


// function login(req, res){

//     const { email, password} = req.query;

//     const usuario = registro.find((reg) => {
//         return reg.email === email && reg.password === password;
//     })
//    if(usuario){
//     res.status(200).json({access: true})
//    } else{
//     res.status(200).json({access: false})
//    }

// }









const {User} = require("../DB_connection");

 async function login(req, res){
  const { email, password} = req.query;
  try {
    if(!email || !password) return res.status(400).send("Faltan datos");
    const user = await User.findOne({where: {email:email}});

    if(!user) return res.status(404).send("Usuario no encontrado");

    return user.password === password 
    ? res.status(200).json({access: true})
    : res.status(403).send("Contraseña incorrecta");

  } catch (error) {
     res.status(500).json(error.message);
  }
};

module.exports = {login};




// const registro = require('../utils/users.js')


// function login(req, res){

//     const { email, password} = req.query;

//     const usuario = registro.find((reg) => {
//         return reg.email === email && reg.password === password;
//     })
//    if(usuario){
//     res.status(200).json({access: true})
//    } else{
//     res.status(200).json({access: false})
//    }

// }