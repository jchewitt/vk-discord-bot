const config = require('../../../config');

const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
  apiKey: config.OPENAI.API_KEY
});
const openai = new OpenAIApi(configuration);

module.exports = openai
