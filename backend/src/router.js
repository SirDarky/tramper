const router = require('express').Router();
const userController = require("./controller/userController");
const empresaController = require('./controller/empresaController');
const loginController = require('./controller/loginController');
const authMiddleware = require('./security');
const definirTipoUser = require('./utils/definirTipoUser');

router.use("/" , loginController);

router.use(authMiddleware);
router.use("/user", userController);
router.use(definirTipoUser);
router.use('/empresa', empresaController);


module.exports = router