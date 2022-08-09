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
    if (!username && password) {
      res.locals.loginStatus = "Please enter a username"
    } else if (username && !password) {
      res.locals.loginStatus = "Please enter your password"
    } else if (!username && !password) {
      res.locals.loginStatus = "Please enter your information"
    }
    else {
      const data = await User.find({username: username, password: password});
      if (data.length === 0) {
        res.locals.loginStatus = "Login Attempt Failed: No Matching Credentials"
      }
      else {
        console.log('log in credentials found')
        res.locals.loginStatus = true;
        return next()
      };
    }
    return next()
  }
  catch (err) {
    console.log(err)
    return next(err);
  }
}


export { controller };