const router = require('express').Router();
const userController = require("./controller/userController")
const empresaController = require('./controller/empresaController')
const loginController = require('./controller/loginController');
const {authMiddleware} = require('./security');


router.use("/" , loginController);
router.post('/empresa', empresaController.store)

router.use(authMiddleware)

router.use("/user", userController);
router.get('/empresa', empresaController.index)
router.get('/empresa/:id', empresaController.show)
router.put('/empresa/:id', empresaController.update)
router.delete('/empresa/:id', empresaController.destroy)

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