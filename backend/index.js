const express = require("express");
const cors = require('cors');
const app = express();
const router = require("./src/router")
const dbConnection = require("./src/db/conexao")
const io = require("./src/websocket/socket")
const bodyparser = require("body-parser")
const http = require('http');
const server = http.createServer(app);
app.use(express.json());


app.use(cors());
// inicializa o servidor websocket
io.attach(server);

dbConnection()

app.use(router)

server.listen(3005, ()=>{
    console.log("Servidor iniciado")
})