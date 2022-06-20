//const main = require('./src');
const {Configuration, OpenAIApi} = require('openai');
require('dotenv').config();
const Client = require('discord.js').Client;
const intents = require('discord.js').Intents;
const logger = require('winston');
const auth = require('./config/auth.json');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>VK Discord Bot</h1>');
});

app.listen(port, () => {
  console.log(`VK Discord bot UI listening on port ${port}`);
});
const configuration = new Configuration({
  apiKey: process.env.openai_api_key
});
const openai = new OpenAIApi(configuration);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
const bot = new Client({intents: [intents.FLAGS.GUILDS, intents.FLAGS.GUILD_MESSAGES]});

bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('messageCreate', async (message) => {
  console.log(message);
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.content.substring(0, 5).toLowerCase() == 'vkbot') {
    const formattedMessage = message.content.toLowerCase();
    const args = formattedMessage.split(' ').splice(1);
    if (message.author.id !== bot.user.id) {
      switch (args[0]) {
        case 'hello':
          message.channel.send(`Hey! I'm ${bot.user.username} and you are ${message.author.username}`);
          break;
      }
    }
  } else if (message.startsWith(':')) {
    message = message.substr(1).trimStart();
    if (message.author.id !== bot.user.id) {
      const response = await openai.createCompletion('text-davinci-002', {
        prompt: `${message.content}`,
        /*        temperature: 0.5,
                max_tokens: 200,
                top_p: 1.0,
                frequency_penalty: 0.5,
                presence_penalty: 0.0,
                stop: ["Q:"], */
        temperature: 0.5,
        max_tokens: 200,
        top_p: 0.5,
        frequency_penalty: 0.5,
        presence_penalty: 0.0
      });
      const res = response.data.choices[0].text.replace('User: ', '').replace('A: ', '');
      if (res && res.length && res !== '\\n\\n') {
        message.channel.send(res);
        //    console.log(response.data);
      }
    }
  }
});

bot.login(process.env.discord_client_token);

