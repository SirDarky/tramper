const mongoose = require('mongoose');
const {mensagemSchema} = require('./mensagemSchema')

const conversasUserSchema = new mongoose.Schema({
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    mensagens: [mensagemSchema]
});

const Conversas = mongoose.model('Conversas', conversasUserSchema);

module.exports = Conversas;