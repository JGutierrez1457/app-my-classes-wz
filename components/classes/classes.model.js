const Schema = require('mongoose').Schema;
const classesSchema = new Schema({
    title: { type: String, trim: true,  unique: false, required: true },
    nameWeapon: { type: String, trim: true,  unique: false, required: true },
    creator: { type:String, trim: true, unique: false, required: true },
    owner: { type: String, trim: true, unique: false, required: true },
    mode: { type : String, trim: true, unique: false, required: false},
    image: { type: String, trim: true, unique: false, required: true},
    likes : { type: Number, trim: true, unique: false, required: true, default: 0}
}, { timestamps: true});

module.exports = classesSchema;