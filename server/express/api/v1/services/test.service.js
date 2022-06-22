const { MembersController } = require('../../../../discord-bot/api/controllers');
const map = new Map();
class TestService {
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
