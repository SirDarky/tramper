const mongoose = require('mongoose');


const conversasUserSchema = new mongoose.Schema({
    user1: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa'
    },
});

const ConversasEmpresa = mongoose.model('ConversasEmpresa', conversasUserSchema);

module.exports = conversasEmpresaSchema;