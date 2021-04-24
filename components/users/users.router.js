const router = require('express').Router();
const userController = require('./users.controller');

router.post('/signin',userController.signin);
router.post('/signup',userController.signup);
router.delete('/:id/delete',userController.deleteUser);
router.get('/',userController.getUsers)
module.exports = router;