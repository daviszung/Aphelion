import express from 'express'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { controller } from '../controllers/controller.js'

const apiRouter = express.Router();

// Creating new user
apiRouter.post('/signup', controller.newUser, (req, res) => res.status(200).json(res.locals.newUsername));

// Login 
apiRouter.post('/login', controller.verifyUser, (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../../game.html"))
}
);


apiRouter.use('/', (req, res) => {
  console.log('Routing Error')
  res.status(404).send('fail')
})

export { apiRouter }