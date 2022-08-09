import { User } from '../models/model.js'

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
      const data = await User.create({ username: username, password: password });
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
        res.locals.loginStatus = "Login Failed: No Matching Credentials"
      }
      else {
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