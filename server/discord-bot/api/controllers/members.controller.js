const config = require('../../../../config').DISCORD;
const client = require('../../bot').client;


class MembersController {
  static async getMembers() {
    const guild = client.guilds.resolve(config.SERVER_ID);
    const members = await guild.members.fetch();
    return members;
  }
  static async getBans() {
    const guild = client.guilds.resolve(config.SERVER_ID);
    const members = await guild.bans.fetch();
    return members;
  }
  static async sendMessage(member, message) {
    await member.send(message);
  }
}

module.exports = MembersController
