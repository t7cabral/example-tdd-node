'use strict'

const mongoose = require('../database');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    officer: { type: String, required: true},
},
{
    versionKey: '_version', // alterar o nome da chave de controle de versionamento
    versionKey: false // desativar controle de versionamento do documento

});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
