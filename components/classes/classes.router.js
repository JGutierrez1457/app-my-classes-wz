const router = require('express').Router();
const classesController = require('./classes.controller');
const auth = require('../../middleware/auth');

router.get('/',classesController.getClasses);
router.get('/myclasses',auth,classesController.getMyClasses);

router.post('/',auth,classesController.createClasses);

router.delete('/:id',auth,classesController.deleteClass);

router.patch('/:id',auth,classesController.updateClass);
router.patch('/:id/like',auth,classesController.likeClass);

module.exports = router;