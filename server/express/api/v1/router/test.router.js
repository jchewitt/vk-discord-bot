const router = require('express').Router();
const { TestService } = require('../services');

router.get('/', (req, res) => {
  const responseData = TestService.getTestResponse('testing service');
  res.send({response: responseData});
});

module.exports = router;
