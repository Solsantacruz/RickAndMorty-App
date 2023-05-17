const registro = require('../utils/users.js')


function login(req, res){

    const { email, password} = req.query;

    const usuario = registro.find((reg) => {
        return reg.email === email && reg.password === password;
    })
   if(usuario){
    res.status(200).json({access: true})
   } else{
    res.status(200).json({access: false})
   }

}






module.exports = login;