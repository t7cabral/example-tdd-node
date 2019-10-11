const router = require('express').Router();
const console_log_middleware = require('../middlewares/console_log');
const load_user_middleware = require('../middlewares/load_user');
const UserController = require('../controllers/UserController');


// get all users ...
router.get('/', UserController.get);

// save one user ...
router.post('/', UserController.post);

// delete one user ...
router.delete('/:id',
    load_user_middleware,
    console_log_middleware,
    UserController.delete
);

module.exports = router;
