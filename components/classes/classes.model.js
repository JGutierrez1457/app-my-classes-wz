const Schema = require('mongoose').Schema;
const classesSchema = new Schema({
    title: { type: String, trim: true,  unique: false, required: true },
    nameWeapon: { type: String, trim: true,  unique: false, required: true },
    creator: { type:String, trim: true, unique: false, required: true },
    nameCreator: { type:String, trim: true, unique: false, required: true},
    owner: { type: String, trim: true, unique: false, required: true },
    mode: { type : String, trim: true, unique: false, required: false,default:'Warzone'},
    avatarCreator: { type: String, required: true, unique: false },
    image: { type: String, trim: true, unique: false, required: true},
    public: { type: Boolean, required: true},
    likes : { type: [String], trim: true, unique: false, required: false, default:[]}
}, { timestamps: true});

module.exports = classesSchema;