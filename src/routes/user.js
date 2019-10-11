const router = require('express').Router();
const User = require('../models/User');


// get all users ...
router.get('/', async (req, res) => {

    User.find({}, (err, data) => {
        if(err) {
            res.status(200).send(err);
            next();
        }
        return res.status(200).json(data);
    });

});

// save one user ...
router.post('/', async (req, res) => {

    try {
        const user = await User.create(req.body);
        return res.status(201).send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Error ao registrar usuário'});
    }

});

// delete one user ...
router.delete('/:id', async (req, res) => {

    try {
        const result = await User.deleteOne({_id: req.params.id}).exec();

        if( result.deletedCount > 0 )
            res.status(200).send({success: true, data: result });
        else
            res.status(400).send({success: false, data: "usuário não encontrado"});

    } catch {
        res.status(500).send(err);
    }
});


module.exports = router;
