require('dotenv').config();
const { Intents } = require('discord.js');

module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  DISCORD: {
    APP_ID: process.env.APP_ID,
    CLIENT_TOKEN: process.env.DISCORD_CLIENT_TOKEN,
    SERVER_ID: process.env.SERVER_ID || '955328398836781076',
    EXCLUDE_CHANNELS: process.env.EXCLUDE_CHANNELS,
    FLAGS: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
    CHAT_DELIMITER: ';'
  },
  SERVER: {
    PORT: process.env.PORT || 3000
  },
  OPENAI: {
    API_KEY: process.env.OPENAI_API_KEY
  }
}