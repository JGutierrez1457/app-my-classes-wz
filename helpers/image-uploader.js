const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./uploads/images/classes');
    },
    filename: function (req, file, cb){
        cb(null, new Date().getTime()+file.originalname)
    }
})
const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'image/jpg'|| file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(new Error('Unsupported File'), false);
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits:{
        fileSize:'1024 * 1024 * 10'
    }
})

module.exports = upload;