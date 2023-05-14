const mongoose = require('mongoose');

const conversasUserSchema = new mongoose.Schema({
    user1:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user2:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

});

const Conversas = mongoose.model('Conversas', conversasUserSchema);

module.exports = conversasUserSchema;