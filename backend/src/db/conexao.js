const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect("mongodb+srv://inovatec123:dLGbJOulKeGzrip4@tramper.vgs5ees.mongodb.net/?retryWrites=true&w=majority");
        console.log('Conectado com o banco de dados')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

//usuario mongodb: inovatec123
//senha mongodb: dLGbJOulKeGzrip4

module.exports = main