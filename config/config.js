require('dotenv').config();
const path = require('node:path');
const { Intents } = require('discord.js');

const cwd = path.join(__dirname, '/../dist/vk-bot-portal');

module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  DISCORD: {
    APP_ID: process.env.APP_ID,
    CLIENT_TOKEN: process.env.DISCORD_CLIENT_TOKEN,
    SERVER_ID: process.env.SERVER_ID || '955328398836781076',
    EXCLUDE_CHANNELS: process.env.EXCLUDE_CHANNELS,
    FLAGS: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.DIRECT_MESSAGES
    ],
    CHAT_DELIMITER: ';'
  },
  SERVER: {
    PORT: process.env.PORT || 3000,
    WEB_CWD: cwd
  },
  OPENAI: {
    API_KEY: process.env.OPENAI_API_KEY
  }
}
