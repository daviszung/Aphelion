import { mongoose } from 'mongoose';
const { Schema } = mongoose;


const MONGO_URI = "mongodb+srv://daviszung:0O0hTr6cz23Ndnny@cluster0.aa3cvpk.mongodb.net/test"


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'db1'
})
  .then(console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


// Schema:

// users      
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  gold: Number,
  bankSpace: Number,
  maxBankSpace: Number,
  bank: {},
  levels: {
    combat: Number,
    attack: {exp: Number, current: Number, level: Number},
    strength: {exp: Number, current: Number, level: Number},
    defence: {exp: Number, current: Number, level: Number},
    constitution: {exp: Number, current: Number, level: Number},
    archery: {exp: Number, current: Number, level: Number},
    arcana: {exp: Number, current: Number, level: Number},
    divinity: {exp: Number, current: Number, level: Number},
    woodcutting: {exp: Number, current: Number, level: Number},
    fishing: {exp: Number, current: Number, level: Number},
    firemaking: {exp: Number, current: Number, level: Number},
    cooking: {exp: Number, current: Number, level: Number},
    mining: {exp: Number, current: Number, level: Number},
    smithing: {exp: Number, current: Number, level: Number},
    thieving: {exp: Number, current: Number, level: Number},
    fletching: {exp: Number, current: Number, level: Number},
    crafting: {exp: Number, current: Number, level: Number},
    runecrafting: {exp: Number, current: Number, level: Number},
  },
  boons: {}
}, {minimize: false});

const User = mongoose.model('user',userSchema);

export { User }
