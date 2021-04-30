const router = require('express').Router();
const userController = require('./users.controller');

router.post('/signin',userController.signin);
router.post('/signup',userController.signup);

module.exports = router;