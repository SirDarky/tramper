const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    senha: String,
    nome: String,
    resumo: String
});

const User = mongoose.model('User', usuarioSchema);

module.exports = User