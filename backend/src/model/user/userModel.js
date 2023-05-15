const mongoose = require('mongoose');
const cursoSchema = require('./cursoSchema')
const formacaoSchema = require('./formacaoSchema')
const experienciaSchema = require('./experienciaSchema')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    resumo: {
        type: String,
        required: true
    },
    cursos:[cursoSchema],
    experiencias:[formacaoSchema],
    formacao:[experienciaSchema],
    curtidas: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    rejeicoes: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    matches: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
});

const User = mongoose.model('User', userSchema);

module.exports = User