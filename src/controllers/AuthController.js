const db = require('../database');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');


module.exports = {
    login: login
}

async function login (req, res) {

    const { email, senha } = req.body;

    // busca usuário pelo email
    const user = await UserModel.findOne({ email });

    // verifica se o usuário existe
    if(!user)
        return res.status(400).send({error: 'User not found'});

    // compara a senha informada com a senha salva
    if(senha !== user.senha )
        return res.status(400).send({error: 'Invalid password'});

    // remove senha
    user.senha = undefined;

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.TOKEN_SECRET,
        { expiresIn: 86400 }
    );

    res.status(200).send({user, token});
}