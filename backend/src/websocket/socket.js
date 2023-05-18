const { Mensagem } = require('../model/conversas/mensagemSchema');
const secretPass = "tramper"
const jwt = require('jsonwebtoken');

// arquivo websocket.js
const io = require("socket.io")({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

io.on('connection', (socket) => {
    socket.on('join-room',(conversa_Usuario)=>{
        for(let i = 0; i<array.length; i++){
            socket.join(conversa_Usuario[i])
        }
    })
    // ouve eventos do cliente
    socket.on('enviar-mensagem', ({texto, autor, id_conversa}) => {
        const novaMensagem = new Mensagem({
            texto: texto,
            autor: autor,
            id_conversa: id_conversa
        })
        novaMensagem.save()
            .then(conversa => {
                socket.to(`${id_conversa}`).emit('mensagem-recebida', conversa);
                console.log(conversa)
            })
            .catch(error => {
                socket.emit('error-mensagem', error)
            });
    });
    socket.on('enviar-mensagem-empresa', ({texto, autor, vaga}) => {
        const novaMensagem = new Mensagem({
            texto: texto,
            autor: autor,
            id_conversa: id_conversa
        })
        novaMensagem.save()
            .then(conversa => {
                socket.to(`${id_conversa}`).emit('mensagem-recebida', conversa);
                console.log(conversa)
            })
            .catch(error => {
                socket.emit('error-mensagem', error)
            });
    });
});

// informações necessárias->
/*
    texto -> mensagem
    autor -> id do autor
    data->
    hora ->
    protocolo -> identificação
*/

module.exports = io;