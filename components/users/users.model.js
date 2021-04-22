const Schema = require('mongoose').Schema;

const userModel = new Schema({
    username:{type: String, required: true, unique: true, trim: true},
    email:{type: String, required: true, unique: true, trim: true},
    password:{type: String, required: true, unique: false, trim: true},
},{timestamps: true});
module.exports = userModel;