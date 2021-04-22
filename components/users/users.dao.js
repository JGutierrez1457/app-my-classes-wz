const userSchema = require('./users.model');
const { model } = require('mongoose');

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
userSchema.statics.createUser = async function(query){
    const queryUser = new  this(query);
    const newUser = await queryUser.save();
    return newUser;
}
userSchema.statics.deleteUser = async function(query){
    const userDeleted = await this.findByIdAndDelete(query);
    return userDeleted
}
module.exports = model('User',userSchema);