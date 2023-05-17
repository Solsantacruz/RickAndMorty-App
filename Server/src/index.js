// const http = require("http");
// const characters = require("./utils/data.js");
// const  getCharById  = require("./controllers/getCharById.js");
// const express = require("express");
// const router = require('./routes');

// const server = express();
// const PORT = 3001;

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// })

// server.use(express.json());
// server.use('/rickandmorty', router)

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });

const express = require("express");
const router = require("./routes");
const server = express();

const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
























// const PORT = 3001;
// http
//  .createServer((req, res) => {
//     // console.log("Server raised")
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

    //CON PROMISES 

// if (url.includes("/rickandmorty/character/")){
//   const urlId = parseInt(url.split('/').pop());
//   getCharById(res, urlId);
// }
//  })
// .listen(PORT, "localhost");


//CON WEBSERVER

    // if (url.includes("/rickandmorty/character")){
    //     const urlId = url.split('/').pop();
    //     const charac = characters.find((character) => character.id === Number(urlId));

    //     res.writeHead(200, {'Content-Type':'application/json'}).end(JSON.stringify(charac));
    //   }
    // })

