const config = require('../config')
const { vkbot } = require('./index');
const server = require('./express').server(config.SERVER);

process.on('unhandledRejection', (reason, promise) => {
  throw reason;
});

vkbot.start();
server.init();
