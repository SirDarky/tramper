const mongoose = require('mongoose');

const canditadosSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    vaga: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Vagas'
    }
});

const Canditados = moongose.model('Canditados', canditadosSchema);

module.exports = Canditados