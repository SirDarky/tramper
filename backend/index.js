const express = require("express");
const app = express();
const router = require("./src/router")
const dbConnection = require("./src/db/conexao")
const bodyparser = require("body-parser")
app.use(bodyparser.json())

dbConnection()

app.use(router)

app.listen(3005, ()=>{
    console.log("Servidor iniciado")
})