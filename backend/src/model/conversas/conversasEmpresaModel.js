const mongoose = require('mongoose');
const mensagemSchema = require('./mensagemSchema')

const conversasUserSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa'
    },
    mensagens: [mensagemSchema]
});

const ConversasEmpresa = mongoose.model('ConversasEmpresa', conversasUserSchema);

module.exports = ConversasEmpresa;