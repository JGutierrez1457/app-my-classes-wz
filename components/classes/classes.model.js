const Schema = require('mongoose').Schema;
const classesSchema = new Schema({
    title: { type: String, trim: true,  unique: false, required: true },
    nameWeapon: { type: String, trim: true,  unique: false, required: true },
    creator: {
        id:{type:String, trim: true, unique: false, required: true },
        username: { type:String, trim: true, unique: false, required: true},
        avatar: { type: String, required: false, unique: false }
    },
    
    owner: { type: String, trim: true, unique: false, required: true },
    mode: { type : String, trim: true, unique: false, required: false,default:'Warzone'},
    image: { type: String, trim: true, unique: false, required: true},
    public: { type: Boolean, required: true},
    likes : { type: [String], trim: true, unique: false, required: false, default:[]},
    reports : { type: [String], trim: true, unique: false, required: false, default: [] }
}, { timestamps: true});

module.exports = classesSchema;