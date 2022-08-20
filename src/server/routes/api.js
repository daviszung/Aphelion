import express from 'express'

import { controller } from '../controllers/controller.js'

const apiRouter = express.Router();

// Creating new user
apiRouter.post('/signup', controller.newUser, (req, res) => res.status(200).json({"signup":res.locals.newUsername}));

// Login 
apiRouter.post('/login', controller.verifyUser, (req, res) => res.status(200).json({"login":res.locals.loginStatus}));

// Get user object
apiRouter.post('/getUser', controller.getUser, (req, res) => res.status(200).json({"userObject":res.locals.userObject}));

// Update user object
apiRouter.patch('/updateUser', controller.updateUser, (req, res) => res.status(200).send({"result" : "Success"}));


apiRouter.use('/', (req, res) => {
  console.log('Routing Error')
  res.status(404).send('fail')
})

export { apiRouter }