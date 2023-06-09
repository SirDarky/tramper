const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
    empresa:{
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    resumo: {
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
    }
});

const Experiencia = mongoose.model('Experiencia', experienciaSchema)

module.exports = {Experiencia, experienciaSchema}