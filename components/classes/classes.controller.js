const classesDAO = require('./classes.dao');

const classesController = {}

classesController.getClasses = async(req, res)=>{
    try {
        const classes = await classesDAO.getAllClasses();
        if(!classes){return res.status(404).send('Nothing Classes')}
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
        return res.status(200).send(classDeleted.title);
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = classesController;