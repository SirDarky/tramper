const mongoose = require('mongoose');

const mensagemUserSchema = new mongoose.Schema({
    mensagem: {
        type: String,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    conversa:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Conversas'
    },
});

const MensagemUser = mongoose.model('MensagemUser',mensagemUserchema);

module.exports = mensagemUserSchema;