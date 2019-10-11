const router = require('express').Router();
const md_teste_middlewares = require('../middlewares/md_teste');
const UserController = require('../controllers/UserController');


// get all users ...
router.get('/', UserController.get);
// save one user ...
router.post('/', UserController.post);
// delete one user ...
router.delete('/:id', md_teste_middlewares, UserController.delete);

module.exports = router;
