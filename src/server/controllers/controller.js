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
    const { username, password } = req.query;
    const data = await User.find({username: username, password: password});
    console.log("dataaaa:", data)
    if (data.length === 0) throw new Error;
    else return next();
  }
  catch (err) {
    return next(err);
  }
}



controller.saveActivity = async function (req, res, next) {
  try {
    const { username, activity, carbon_lb } = req.body;
    console.log("Request Body: ", req.body)
    // Create new activity document in MongoDB with userId, inputs, and outputs
    const newActivity = await Activity.create({username: username, activity:activity, carbon_lb: carbon_lb});
    // const activityId = newActivity._id;
    console.log("newActivity: ", newActivity);
    const updateUser = await User.findOneAndUpdate(
      {username: username},
      {$push:{activity:newActivity._id}},
      {new: true})
    return next();
    // Update user document with new activity Id (will be generated after create method is done)
    // const update = User.findOneAndUpdate({username/userId}, activityId: activityId )
  }
  catch (err){
    return next(err);
  }
};


export { controller };