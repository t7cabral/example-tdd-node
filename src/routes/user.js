const router = require('express').Router();
const User = require('../models/User');


router.get('/', async (req, res, next) => {

    User.find({}, (err, data) => {
        if(err) {
            res.status(200).send(err);
            next();
        }
        return res.status(200).json(data);
    });

})

module.exports = router;
