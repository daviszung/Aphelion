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
    attack: {exp: Number, expToLevel: Number, current: Number, level: Number},
    strength: {exp: Number, expToLevel: Number, current: Number, level: Number},
    defence: {exp: Number, expToLevel: Number, current: Number, level: Number},
    hitpoints: {exp: Number, expToLevel: Number, current: Number, level: Number},
    ranged: {exp: Number, expToLevel: Number, current: Number, level: Number},
    magic: {exp: Number, expToLevel: Number, current: Number, level: Number},
    prayer: {exp: Number, expToLevel: Number, current: Number, level: Number},
    woodcutting: {exp: Number, expToLevel: Number, current: Number, level: Number},
    fishing: {exp: Number, expToLevel: Number, current: Number, level: Number},
    firemaking: {exp: Number, expToLevel: Number, current: Number, level: Number},
    cooking: {exp: Number, expToLevel: Number, current: Number, level: Number},
    mining: {exp: Number, expToLevel: Number, current: Number, level: Number},
    smithing: {exp: Number, expToLevel: Number, current: Number, level: Number},
    thieving: {exp: Number, expToLevel: Number, current: Number, level: Number},
    fletching: {exp: Number, expToLevel: Number, current: Number, level: Number},
    crafting: {exp: Number, expToLevel: Number, current: Number, level: Number},
    runecrafting: {exp: Number, expToLevel: Number, current: Number, level: Number},
    herblore: {exp: Number, expToLevel: Number, current: Number, level: Number}
  }
}, {minimize: false});

const User = mongoose.model('user',userSchema);

export { User }
