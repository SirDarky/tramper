const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    nome: {
        type: String,
        requered: true
    },
    areaAtuacao: {
        type : String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa