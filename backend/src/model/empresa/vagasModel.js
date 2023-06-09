const mongoose = require('mongoose');

const vagasSchema = new mongoose.Schema({
    localVaga: {
        type: String,
        required: true
    },
    areaAtuacao:{
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    salario: {
        type: String,
        required: true
    },
    beneficios: {
        type: String,
        required: true
    },
    requisito: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required : true
    },
    empresa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa'
    },
    canditados:[{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
});

const Vagas = mongoose.model('Vagas', vagasSchema);

module.exports = Vagas
