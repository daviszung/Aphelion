import { User } from '../models/model.js'
import bcrypt from 'bcrypt'


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
        await User.create({ username: username, password: hash });
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
    if (!username && password) {
      res.locals.loginStatus = "Please enter a username"
      return next()
    } else if (username && !password) {
      res.locals.loginStatus = "Please enter your password"
      return next()
    } else if (!username && !password) {
      res.locals.loginStatus = "Please enter your information"
      return next()
    }
    else {
      const data = await User.find({username: username});
      if (data.length === 0) {
        res.locals.loginStatus = "Login Failed: Incorrect ID or Password"
        return next()
      }
      else {
        bcrypt.compare(password, data[0].password).then(function(result) {
          if (result) {
            res.locals.loginStatus = true;
            console.log(res.locals.loginStatus)
          } else {
            res.locals.loginStatus = "Login Failed: Incorrect ID or Password";
          }
        }).then(()=> {
          return next()
        })
      };
    }
  }
  catch (err) {
    console.log(err)
    return next(err);
  }
}

export { controller };
