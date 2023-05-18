const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
    mensagem: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    timestamp: { type: Date, default: Date.now }
});
const Mensagem = mongoose.model('Mensagem', mensagemSchema);

module.exports = {Mensagem, mensagemSchema};