const router = require('express').Router();
const { TestService } = require('../services');

router.get('/test', async (req, res) => {
  const member = await TestService.getMemberByName('Titherin');
  member.send('This is an automated message. Do not reply or you will be perma banned.');
  res.send('Successful');
});

router.post('/sendMessage', async (req, res) => {
  const data = req.body;
  const msg = data.message;
  const member = await TestService.getMemberByName(data.user);
  member.send(msg);
  res.sendStatus(200);
})

module.exports = router;
