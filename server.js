/* eslint-disable max-len */
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';

const app = express();
app.set('view engine', 'ejs')
  .use(compression())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', routes)
  .listen(config.server.port, (err) => {
    if (err) process.exit(1);
  
    console.log(`API is now running on port ${config.server.port} in ${config.env} mode`);
  });

export default app;
