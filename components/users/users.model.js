const Schema = require('mongoose').Schema;
const convertToBase64 = require('../../utils/convertFileToBase64');
const userModel = new Schema({
    username:{type: String, required: true, unique: true, trim: true},
    avatar:{type: String, required:true, unique: false,default:`data:image/png;base64,${convertToBase64('../static/avatar/avatar.png')}`},
    email:{type: String, required: true, unique: true, trim: true},
    password:{type: String, required: true, unique: false, trim: true},
},{timestamps: true});
module.exports = userModel;