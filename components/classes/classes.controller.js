const classesDAO = require('./classes.dao');

const classesController = {}

classesController.getClasses = async(req, res)=>{
    try {
        const classes = await classesDAO.getAllClasses();
        if(!classes){return res.status(404).send('Nothing Classes')}
        console.log(classes.map(c => c.title))
        return res.status(200).send(classes);
    } catch (error) {
        return res.status(500).send(error)
    }
}
classesController.createClasses = async(req, res)=>{
    const classQuery = req.body;
    try {
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
        const classEdit = await classesDAO.updateClass(_id,classData);
        return res.status(200).send(classEdit);
    }catch(error){
        return res.status(500).send(error);
    }
}

module.exports = classesController;