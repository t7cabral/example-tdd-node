const UserModel = require('../models/User');


module.exports = async (req, res, next) => {
    try {
        const result = await UserModel.findOne({_id: req.params.id});

        if(result) {
            res.locals._user_ = result;
            next();
        } else {
            res.status(400).
                send({
                    success: false,
                    msg: `Usuário _id: ${req.params.id} não encontrado.`
                });
        }
    } catch (err) {
        res.json({error: err});
    }
}