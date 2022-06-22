const router = require('express').Router();
const { TestService } = require('../services');

router.get('/test', async (req, res) => {
  const member = await TestService.getMemberByName('Titherin');
  member.send('This is an automated message. Do not reply or you will be perma banned.');
  res.send('Successful');
});

router.get('/members', async (req, res) => {
  const members = await TestService.getMembers();
  res.send(members);
})

router.get('/bans', async (req, res) => {
  const bans = await TestService.getBans();
  const banArr = bans.map(ban => {
    return ban.user;
  });
  res.send(banArr);
})
router.post('/banMember/:id', async (req, res) => {
  const member = await TestService.getMemberById(req.params.id);
  member.ban()
  res.sendStatus(200);
});

router.post('/unbanMember/:id', async (req, res) => {
  const member = await TestService.getBanById(req.params.id);
  TestService.unbanMember(member.user);
  res.sendStatus(200);
});

router.post('/sendMessage/:id', async (req, res) => {
  const data = req.body;
  const msg = data.message;
  const member = await TestService.getMemberById(req.params.id);
  member.send(msg);
  res.sendStatus(200);
})

module.exports = router;
