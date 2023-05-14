const mongoose = require('mongoose');

const mensagemEmpresaSchema = new mongoose.Schema({
    mensagem: {
        typeu: String,
        required: true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'},
        
    conversaEmpresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ConversasEmpresa'
    }
});

const MensagemEmpresa = mongoose.model('MensagemEmpresa',mensagemEmpresaSchema);

module.exports = mensagemEmpresaSchema;