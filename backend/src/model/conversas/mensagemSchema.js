const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
    mensagem: {
        type: String,
        required: true
    },
    user: String,
    timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

module.exports = {Message, messageSchema};