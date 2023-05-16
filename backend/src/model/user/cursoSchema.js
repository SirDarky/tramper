const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    empresa:{
        type: String,
        required: true
    },
    resumo: {
        type: String
    },
    datainicio: {
        type: String,
        required: true
    },
    datatermino: {
        type: String,
        required: true
    },
    titulo:{
        type: String,
        required:true
    }
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = {Curso, cursoSchema}