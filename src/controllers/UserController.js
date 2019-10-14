const db = require('../database');
const UserModel = require('../models/User');


module.exports = {
    get: getAll,
    post: saveOne,
    update: updateOne,
    delete: deleteOne,
}

async function getAll (req, res) {

    UserModel.find({}, (err, data) => {
        if(err) {
            res.status(200).send(err);
            next();
        }
        return res.status(200).json(data);
    });
};

async function saveOne (req, res) {
    try {
        const user = await UserModel.create(req.body);
        return res.status(201).send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Error ao registrar usuário'});
    }
}

async function updateOne (req, res) {

    try {
        const result = await UserModel.findByIdAndUpdate( 
            req.params.id,
            { $set: req.body }, 
            { new: true }
        );

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (err) {
        res.status(500).json({
            sucess: false,
            error: err
        });
    }

}

async function deleteOne (req, res) {
    try {
        const result = await UserModel.deleteOne({_id: res.locals._user_}).exec();

        if( result.deletedCount > 0 )
            res.status(200).send({success: true, data: result });
        else
            res.status(400).send({success: false, data: "usuário não encontrado"});

    } catch (err) {
        res.status(500).send(err);
    }
}
