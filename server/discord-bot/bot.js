const config = require('../../config');
const { Client } = require('discord.js');
const api = require('./api');
const logger = require('../logger');

const client = new Client({
  intents: [
    ...config.DISCORD.FLAGS
  ],
  partials: [
    'CHANNEL'
  ]
});


module.exports = {
  start() {
    const start = new Promise((resolve, reject) => {
      client.once('ready', () => {
        logger.info('Connected');
        logger.info('Logged in as:');
        logger.info(`${client.username} - ${client.id}`);
        logger.info('Ready!');
        resolve();
      });
    });
    client.login(config.DISCORD.CLIENT_TOKEN);
    return start;
  },
  client,
  api,
}
