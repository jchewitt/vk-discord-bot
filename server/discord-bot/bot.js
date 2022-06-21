const config = require('../../config');
const { Client } = require('discord.js');
const api = require('./api');
const logger = require('../logger');

const client = new Client({
  intents: [
    ...config.DISCORD.FLAGS
  ]
});


module.exports = {
  async start() {
    client.once('ready', () => {
      logger.info('Connected');
      logger.info('Logged in as:');
      logger.info(`${client.username} - ${client.id}`);
      logger.info('Ready!');
    });

    await client.login(config.DISCORD.CLIENT_TOKEN);
  },
  client,
  api,
}