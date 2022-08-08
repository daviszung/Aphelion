import { User } from '../models/model.js'

const controller = {};


// Creates a new user
controller.newUser = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const data = await User.create({ username: username, password: password });
    res.locals.newUsername = data.username;
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
    const data = await User.find({username: username, password: password});
    if (data.length === 0) throw new Error;
    else {
      console.log('log in credentials found')
      return next()
    };
  }
  catch (err) {
    return next(err);
  }
}


export { controller };