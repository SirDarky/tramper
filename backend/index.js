const express = require("express");
const app = express();

const bodyparser = require("body-parser")
app.use(bodyparser.json())



app.listen(3000, ()=>{
    console.log("Servidor iniciado")
})