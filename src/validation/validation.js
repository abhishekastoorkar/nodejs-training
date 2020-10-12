const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('name')
    .isEmpty()
    .withMessage('User name can not be empty!')
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required!'),

  check('email')
    .trim()
    .normalizeEmail()
    .isEmpty()
    .withMessage('Invalid email address!'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.msg.array() });
    next();
  },
];
