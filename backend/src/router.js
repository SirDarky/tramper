const router = require('express').Router();
const userController = require("./controller/userController")

router.use("/user", userController);

module.exports = router