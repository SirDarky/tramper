const mongoose = require('mongoose');

const formacaoSchema = new mongoose.Schema({
    empresa:{
        type: String,
        required: true
    },
    datainicio: {
        type: String,
        required: true
    },
    datatermino: {
        type: String,
        required: true
    },
    curso:{
        type: String,
        required: true
    }
});

const Formacao = mongoose.model('Formacao', formacaoSchema);

module.exports = {formacaoSchema, Formacao}