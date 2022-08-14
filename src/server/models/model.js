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
  gold: 0,
  bank: {}
}, {minimize: false});

const User = mongoose.model('user',userSchema);

export { User }
