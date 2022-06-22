const logger = require('../logger');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const cors = require('cors');
const express = require('express');
const api = require('./api');

const app = express();

module.exports = (config) => {
  /*
  Allow for cross origin
   */
  app.use(cors());

  /*
  Setup behind porxy handling
   */
  app.enable('trust proxy');
  app.use(function (req, res, next) {
    let schema = req.headers['x-forwarded-proto'];
    if (schema === 'https') req.connection.encrypted = true;
    next();
  });

  /*
  Handle json and encoded responses
   */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  /*
  Deliver api to /api
   */
  app.use('/api', api);

  /*
  Deliver angular application index.html as any url.
   */
  app.get('/*', express.static(config.WEB_CWD), function(req, res, next) {
    res.sendFile('index.html', {root: config.WEB_CWD});
  });
//  app.use('*', express.static(config.WEBSERVE));

  return {
    app,
    init() {
      const httpServer = http.createServer(app);
      app.listen(config.PORT, () => {
        logger.info(`Express is listening on port ${config.PORT}`);
      });
    }
  }
}
