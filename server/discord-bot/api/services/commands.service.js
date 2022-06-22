const discordConfig = require('../../../../config').DISCORD;
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9');

const rest = new REST({version: '9'}).setToken(discordConfig.CLIENT_TOKEN)

class CommandsService {
  static async putCommands(commands) {
    await rest.put(Routes.applicationGuildCommands(discordConfig.APP_ID, discordConfig.SERVER_ID), { body: commands });
  }
}
module.exports = CommandsService;
