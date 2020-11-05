const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();
const objAuthController = new AuthController();
router.post('/signup', objAuthController.signUp);
router.post('/confirm', objAuthController.confirmUser);
router.post('/signin', objAuthController.signIn);
module.exports = router;
