const mongoose = require('mongoose');

const relacionamentosSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user2: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Vagas'
    }
});

const Canditados = moongose.model('Canditados', canditadosSchema);

module.exports = Canditados