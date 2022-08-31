'use strict';

import express from 'express'
import cors from 'cors'
import routes from '../routes'
import bodyParser from 'body-parser'

const initServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/api', routes);
  app.listen(3001, () => console.log('Server started'));
}

export default initServer
