const Schema = require('mongoose').Schema;
const classesSchema = new Schema({
    title: { type: String, trim: true,  unique: false, required: true },
    nameWeapon: { type: String, trim: true,  unique: false, required: true },
    creator: { type:String, trim: true, unique: false, required: true },
    nameCreator: { type:String, trim: true, unique: false, required: true},
    owner: { type: String, trim: true, unique: false, required: true },
    mode: { type : String, trim: true, unique: false, required: false,default:'Warzone'},
    image: { type: String, trim: true, unique: false, required: true},
    likes : { type: [String], trim: true, unique: false, required: true, default:[]}
}, { timestamps: true});

module.exports = classesSchema;