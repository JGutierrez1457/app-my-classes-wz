const router = require('express').Router();
const classesController = require('./classes.controller');
const auth = require('../../middleware/auth');
const upload = require('../../helpers/image-uploader');

router.get('/',classesController.getPublicClasses);
router.get('/allclasses',classesController.getAllClasses);
router.get('/myclasses',auth,classesController.getMyClasses);

router.post('/',auth,upload.single('image'),classesController.createClasses);

router.delete('/:id',auth,classesController.deleteClass);

router.patch('/:id',auth,classesController.updateClass);
router.patch('/:id/like',auth,classesController.likeClass);

module.exports = router;