const router = require('express').Router();
const userController = require('./users.controller');
const auth = require('../../middleware/auth');

router.get('/',userController.getUsers);

router.patch('/edit/profile',auth,userController.editProfile);
router.patch('/edit/email',auth,userController.editEmail);
router.patch('/edit/security',auth,userController.editPassword);

router.delete('/:id/delete',userController.deleteUser);

module.exports= router;