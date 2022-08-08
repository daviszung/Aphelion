import express from 'express'

import { controller } from '../controllers/controller.js'

const apiRouter = express.Router();

// Creating new user
apiRouter.post('/signup', controller.newUser, (req, res) => res.status(200).json(res.locals.newUsername));

// Login 
apiRouter.post('/login', controller.verifyUser, (req, res) => res.status(200).json({msg: 'Logged in'}));


apiRouter.use('/', (req, res) => {
  console.log('Routing Error')
  res.status(404).send('fail')
})

export { apiRouter }