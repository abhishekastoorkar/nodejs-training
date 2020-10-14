const Joi = require('joi');
const validationOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

const trainerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
});

const validate = () => {
  return (req, res, next) => {
    const { error } = trainerSchema.validate(req.body, validationOptions);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      console.log('error', message);
      res.status(422).json({ error: message });
    }
  };
};

module.exports = validate;
