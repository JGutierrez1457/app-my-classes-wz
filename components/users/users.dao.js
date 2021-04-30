const userSchema = require('./users.model');
const mongoose = require('mongoose');

userSchema.statics.getUsers = async function(){
    const users = await this.find();
    return users;
}
userSchema.statics.getUser = async function(email){
    const user = await this.findOne(email);
    return user;
}
userSchema.statics.getUserId = async function(id){
    const user = await this.findById(id);
    return user;
}
userSchema.statics.editUser = async function(_id,query){
    const user = await this.findByIdAndUpdate(_id,query,{new: true});
    return user;

}
userSchema.statics.createUser = async function(query){
    const queryUser = new  this(query);
    const newUser = await queryUser.save();
    return newUser;
}
userSchema.statics.deleteUser = async function(query){
    const userDeleted = await this.findByIdAndDelete(query);
    return userDeleted
}

userSchema.statics.validateId = async function(_id){
    if(!mongoose.Types.ObjectId.isValid(_id)) return false;
    const User = await this.findById(_id);
    return User;
}

module.exports = mongoose.model('User',userSchema);