'use strict'

const mongoose = require('../database');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    officer: { type: String, required: true},
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
