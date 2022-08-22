import { User } from '../models/model.js'
import bcrypt from 'bcrypt'


// create a newUser object
function createNewUserObject(username, password){
  return {
    username: username,
    password: password,
    gold: 0,
    bankSpace: 0,
    maxBankSpace: 12,
    bank: {},
    levels: {
      combat: 1,
      attack: {exp: 0, current: 1, level: 1},
      strength: {exp: 0, current: 1, level: 1},
      defence: {exp: 0, current: 1, level: 1},
      hitpoints: {exp: 0, current: 1, level: 1},
      ranged: {exp: 0, current: 1, level: 1},
      magic: {exp: 0, current: 1, level: 1},
      prayer: {exp: 0, current: 1, level: 1},
      woodcutting: {exp: 0, current: 1, level: 1},
      fishing: {exp: 0, current: 1, level: 1},
      firemaking: {exp: 0, current: 1, level: 1},
      cooking: {exp: 0, current: 1, level: 1},
      mining: {exp: 0, current: 1, level: 1},
      smithing: {exp: 0, current: 1, level: 1},
      thieving: {exp: 0, current: 1, level: 1},
      fletching: {exp: 0, current: 1, level: 1},
      crafting: {exp: 0, current: 1, level: 1},
      runecrafting: {exp: 0, current: 1, level: 1},
      herblore: {exp: 0, current: 1, level: 1}
    },
    boons: {}
  }
}

const saltRounds = 10;

const controller = {};

// Creates a new user
controller.newUser = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    // find if the username already exists in the database
    const alreadyExists = await User.find({username: username})
    // create a new user in the database
    if (alreadyExists[0] && alreadyExists[0].username === username) {
      res.locals.newUsername = `An account with the name: ${username} already exists`
    } else {
      bcrypt.hash(password, saltRounds, async function(err, hash) {
        await User.create(createNewUserObject(username, hash));
        
      });
      res.locals.newUsername = `Created an account with the name ${username}!`
    }
    return next();
  }
  catch (err) {
    return next(err);
  }
};

// Verify a user's login information
controller.verifyUser = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const data = await User.find({username: username});
    if (data.length === 0) {
      res.locals.loginStatus = "Login Failed: Incorrect ID or Password"
      return next()
    }
    else {
      bcrypt.compare(password, data[0].password).then(function(result) {
        if (result) {
          res.locals.loginStatus = true;
        } else {
          res.locals.loginStatus = "Login Failed: Incorrect ID or Password";
        }
        return next()
      })
    };
  }
  catch (err) {
    return next(err);
  }
}

// get user object
controller.getUser = async function (req, res, next) {
  try {
    const { username } = req.body;
    const data = await User.find({username: username})
    res.locals.userObject = data[0];
    return next()
  }
  catch (err) {
    return next(err);
  }
}

// update user object
controller.updateUser = async function (req, res, next) {
  try {
    await User.findOneAndReplace({username: req.body.username}, req.body)
    return next()
  }
  catch (err) {
    return next(err);
  }
}


export { controller };
