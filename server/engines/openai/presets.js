const openai = require('./engine');

const models = {
  general: 'text-davinci-002'
}

/*
  SET PRESETS -
  model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop
 */

const getPreset = (
  model,
  temperature,
  max_tokens,
  top_p,
  frequency_penalty,
  presence_penalty,
  stop
) => {
  return {
    model,
    config: {
      temperature,
      max_tokens,
      top_p,
      frequency_penalty,
      presence_penalty,
      stop
    }
  }
};

const presets = {
  chat: getPreset(models.general, 0.5, 60, 10, 0.5, 0.0, ['You'])
}

module.exports = (prompt) => {
  return {
    async simpleChat() {
      const model = presets.chat.model;
      const config = presets.chat.config;
      return await openai.createCompletion(model, {prompt, ...config})
    }
  }
};