const config = require('../../../../config').DISCORD;
const client = require('../../bot').client;

class GuildController {
  static get guild() {
    return client.guilds.resolve(config.SERVER_ID);
  }
  static async getMembers() {
    const guild = client.guilds.resolve(config.SERVER_ID);
    const members = await guild.members.fetch();
    return members;
  }
}

module.exports = GuildController
