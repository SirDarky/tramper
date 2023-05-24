const express = require("express");
const cors = require('cors');
const app = express();
const router = require("./src/router")
const dbConnection = require("./src/db/conexao")
const io = require("./src/websocket/socket")
const bodyparser = require("body-parser")
const http = require('http');
const server = http.createServer(app);

app.use(express.urlencoded({extended:true}))

app.use('/fotos', express.static('./uploads'));
app.use(cors());

app.use(express.json());
dbConnection()
app.use(router)

server.listen(3005, ()=>{
    console.log("Servidor iniciado")
})