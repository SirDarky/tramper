const router = require('express').Router();
const userController = require("./controller/userController")

router.use("/user", userController);
/*
    //Falta:
    Adicionar Cursos
    Adicionar Experiencia
    Realizar uma nova conversa
    Realizar o matches
    Cadastro de empresa
    Cadastro de vagas
    Envio de mensagens(talvez por meio do websocket)
*/

module.exports = router