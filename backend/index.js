const express = require("express");
const app = express();
const router = require("./src/router")
const dbConnection = require("./src/db/conexao")

dbConnection()

const bodyparser = require("body-parser")
app.use(bodyparser.json())

app.use(router)

app.listen(3000, ()=>{
    console.log("Servidor iniciado")
})