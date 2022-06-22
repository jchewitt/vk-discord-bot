const { MembersController, GuildController } = require('../../../../discord-bot/api/controllers');
const map = new Map();
const idmap = new Map();
class TestService {
  static async getMembers() {
    const members = await MembersController.getMembers();
    const membersArr = Array.from(members.values());
    return membersArr;
  }
  static async unbanMember(user) {
    return await GuildController.guild.members.unban(user);
  }
  static async getBans() {
    const members = await MembersController.getBans();
    const bansArr = Array.from(members.values());
    return bansArr;
  }

  static async getBanById(id) {
    const bans = await TestService.getBans();
    const member = bans.find(member => member.user.id === id);
    return member;
  }
  static async getMembersMap() {
    return await MembersController.getMembers();
  }
  static async getMemberById(id) {
    const cachedMember = idmap.get(id);
    if (cachedMember) {
      return cachedMember;
    }
    const members = await TestService.getMembers();
    const member = members.find(member => {
      if (member.id === id) {
        idmap.set(member.id, member);
        return true;
      }
      return false;
    });
    return member;
  }
  static async getMemberByName(name) {
    const cachedMember = map.get(name);
    if (cachedMember) {
      return cachedMember;
    }
    const members = await MembersController.getMembers();
    const membersArr = Array.from(members.values());
    const member = membersArr.find(member => {
      if (member.user.username === name) {
        map.set(member.user.username, member);
        return true;
      }
      return false;
    });
    return member;
  }
}

module.exports = TestService;
