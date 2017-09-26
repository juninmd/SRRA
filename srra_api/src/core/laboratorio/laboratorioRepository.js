const mongoose = require('mongoose');
const Schema = require('./laboratorioSchema');

module.exports = {
    selecionar,
    buscar,
    inserir,
    alterar,
    deletar
}

function selecionar(callback) {
    Schema.find( (err, data) => {
        if(err)
            return callback(err);

        callback(data);
    });
}

function buscar(callback) {
    Schema.findById(req.params.id, (err, data) => {
        if(err)
            return callback(err);

        callback(data);
    });
}

function selecionar(id, callback) {
    Schema.findById(id, (err, data) => {
        if(err)
            return callback(err);

        callback(data);
    });
}

function inserir(laboratorio, callback) {
    new Schema(laboratorio).save( (err, data) => {
        if(err)
            return res.status(500).json(err);

        res.status(200).json({message: 'Inserido com Sucesso!'});
    });
}

function alterar(id, laboratorioNew, callback) {
    Schema.findById(id, (err, data) => {
        if(err)
            return callback(err);
        
        for(item in data) {
            if(item != "_id")
                data[item] = laboratorioNew[item]
        }

        data.save( (err, data) => {
            if(err)
                return callback(err)
            
            callback(data);
        });
    });    
}

function deletar(id, callback) {
    Schema.findByIdAndRemove(id, (err, data) => {
        if(err)
            return callback(err);

        callback(data);
    });
}