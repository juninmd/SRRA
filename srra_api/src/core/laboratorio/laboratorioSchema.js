const mongoose = require('mongoose');

let laboratorioSchema = mongoose.Schema({
    // "matricula": Number,
    // "cpf": Number,
    // "nome": String,
    // "email": String,
    // "senha": Number
})

module.exports = mongoose.model('srra-laboratorio', laboratorioSchema);