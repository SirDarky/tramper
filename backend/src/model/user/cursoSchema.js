const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    empresa:{
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
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = cursoSchema