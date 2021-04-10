const router = require('express').Router();
const classesController = require('./classes.controller');

router.get('/',classesController.getClasses);

router.post('/',classesController.createClasses);

router.delete('/:id',classesController.deleteClass);

module.exports = router;