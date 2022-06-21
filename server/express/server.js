const logger = require('../logger');
const serverConfig  = require('../../config').SERVER
const express = require('express');
const app = express();

module.exports = {
  app,
  init() {

    app.get('/', (req, res) => {
      res.send('<h1>VK Discord Bot</h1>');
    });

    app.listen(serverConfig.PORT, () => {
      logger.info(`VK Discord bot UI listening on port ${serverConfig.PORT}`);
    });

  }
}