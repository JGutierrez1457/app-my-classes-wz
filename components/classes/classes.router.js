const router = require('express').Router();
const classesController = require('./classes.controller');
const auth = require('../../middleware/auth');

router.get('/',auth,classesController.getClasses);

router.post('/',classesController.createClasses);

router.delete('/:id',classesController.deleteClass);

router.patch('/:id',classesController.updateClass);

module.exports = router;