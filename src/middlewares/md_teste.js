const UserModel = require('../models/User');

module.exports = async (req, res, next) => {

    const result = await UserModel.find({_id: req.params.id});

    console.log(`Registro apagado com sucesso:\n${JSON.stringify(result)}`);

    next();
}