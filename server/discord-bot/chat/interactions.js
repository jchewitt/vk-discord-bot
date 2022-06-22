const discordConfig = require('../../../config').DISCORD;
const openai = require('../../engines/openai');
const logger = require('../../logger')
const { client } = require('../bot');

client.on('messageCreate', async (message) => {
  if (discordConfig.EXCLUDE_CHANNELS && ~discordConfig.EXCLUDE_CHANNELS.indexOf(message.channelId)) return;
  logger.info(message);

  let messageText = message.content.toLowerCase();

  if (messageText.startsWith('vkbot')) {
    const args = messageText.split(' ').splice(1);
    if (message.author.id !== client.user.id) {
      switch (args[0]) {
        case 'hello':
          message.channel.send(`Hey! I'm ${client.user.username} and you are ${message.author.username}`);
          break;
      }
    }
  } else if (messageText.startsWith(discordConfig.CHAT_DELIMITER)) {
    messageText = messageText.substr(1).trimStart();
    if (message.author.id !== client.user.id) {
      const response = await openai.presets(messageText).simpleChat()
      const res = response.data.choices[0];
      if (res && res.length && res !== '\\n\\n') {
        message.channel.send(res);
      }
    }
  }
});
