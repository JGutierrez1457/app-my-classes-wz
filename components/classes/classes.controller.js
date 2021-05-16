const classesDAO = require('./classes.dao');
const userDAO = require('../users/users.dao');

const classesController = {}

classesController.getAllClasses = async(req, res)=>{
    try {
        const classes = await classesDAO.getManyClasses();
        if(!classes){return res.status(404).send('Nothing Classes')}
        return res.status(200).send(classes);
    } catch (error) {
        return res.status(500).send(error)
    }
}
classesController.getClasses = async(req, res)=>{
    try {
        const classes = await classesDAO.getManyClasses({public:true});
        if(!classes){return res.status(404).send('Nothing Classes')}
        return res.status(200).send(classes);
    } catch (error) {
        return res.status(500).send(error)
    }
}
classesController.getMyClasses = async(req,res)=>{
    try {
        const classes = await classesDAO.getManyClasses({'creator.id':req.userId});
        return res.status(200).send(classes);
    } catch (error) {
        return res.status(500).send(error);
    }
}
classesController.createClasses = async(req, res)=>{
    try {
    const creator = await userDAO.getUserId({_id:req.userId});
    const classQuery = {...req.body,creator:{id:creator._id, username: creator.username, avatar: creator.avatar }};
    
        const newClass = await classesDAO.createClass(classQuery);
        return res.status(200).send(newClass);
    } catch (error) {
        return res.status(500).send(error)
    }
}
classesController.deleteClass = async(req, res)=>{
    const { id : _id} = req.params;
    try {
        const validID = await classesDAO.validateId(_id);
        if(!validID){return res.status(404).send('No Class With Id')}
        const classDeleted = await classesDAO.deleteClass(_id);
        return res.status(200).send(classDeleted._id);
    } catch (error) {
        return res.status(500).send(error);
    }
}
classesController.updateClass = async(req,res)=>{
    const { id : _id } = req.params;
    const classData = req.body;
    try{
        const validId =await classesDAO.validateId(_id);
        if(!validId){return res.status(404).send('No Class With this Id')}
        const classEdit = await classesDAO.updateClassId(_id,classData);
        return res.status(200).send(classEdit);
    }catch(error){
        return res.status(500).send(error);
    }
}
classesController.likeClass = async(req,res)=>{
    const { id : _id } = req.params;
    try{
        const validId = await classesDAO.validateId(_id);
        if(!validId){return res.status(404).send('No Class With this Id')}
        const likeArray = validId.likes;
        const likedUser = validId.likes.findIndex(userLike=>userLike===req.userId);
        let classLiked;
        if(likedUser===-1){
          classLiked = await classesDAO.updateClassId(_id,{$set:{likes:[...likeArray,req.userId]}})
        }else{
            likeArray.splice(likedUser,1);
            classLiked = await classesDAO.updateClassId(_id,{$set:{likes:[...likeArray]}})
        }
        return res.status(200).send(classLiked);
    }catch(error){
        return res.status(500).send(error)
    }
}

module.exports = classesController;