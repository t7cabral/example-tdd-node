const router = require('express').Router();

const UserController = require('../controllers/User');
const console_log_middleware = require('../middlewares/console_log');
const validate_token_middleware = require('../middlewares/validate_token');
const load_user_middleware = require('../middlewares/load_user');


// middleware de verificação de token
router.use(validate_token_middleware);

// get all users ...
router.get('/', UserController.get);

// save one user ...
router.post('/', UserController.post);

// update one user ...
router.put('/:id', UserController.update);

// delete one user ...
router.delete('/:id',
    load_user_middleware,
    console_log_middleware,
    UserController.delete
);

module.exports = router;
