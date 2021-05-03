const classesModel = require('./classes.model');
const mongoose = require('mongoose');

classesModel.statics.getManyClasses = async function(query){
    const Classes = await this.find(query).exec();
    return Classes;
}
classesModel.statics.createClass = async function(query){
    const Class = new this(query);
    const newClass = await Class.save();
    return newClass;
}
classesModel.statics.deleteClass = async function(query){
    const classDeleted = await this.findByIdAndRemove(query);
    return classDeleted;
}
classesModel.statics.updateClassId = async function(_id,query){
    const classUpdate = await this.findByIdAndUpdate(_id,query,{new:true});
    return classUpdate;
}
classesModel.statics.updateManyClass = async function (filter,query){
    const classesUpdate = await this.updateMany(filter,query,{new:true});
    return classesUpdate
}

classesModel.statics.validateId = async function(_id){
    if(!mongoose.Types.ObjectId.isValid(_id)) return false;
    const Class = await this.findById(_id);
    return Class;
}

module.exports = mongoose.model('Class',classesModel);