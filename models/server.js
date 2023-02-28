const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
   /*  this.usuariosPath = '/api/usuarios' */
  }

  middlewares(){

    //cors
    this.app.use(cors())

    this.app.use(express.static('public'))

    //lectura y paseo del body
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/api/usuarios', require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
