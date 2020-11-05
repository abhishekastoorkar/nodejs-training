const AuthService = require('../services/AuthService');
const objAuthService = new AuthService();
class AuthController {
  async signUp(req, res) {
    const userData = req.body;
    try {
      const result = await objAuthService.signUp(userData);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }

  async confirmUser(req, res) {
    const userName = req.body.username;
    const verificationCode = req.body.verificationcode;
    try {
      const result = await objAuthService.confirmUser(
        userName,
        verificationCode
      );
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  async signIn(req, res) {
    const userName = req.body.username;
    const password = req.body.password;
    try {
      const result = await objAuthService.signIn(userName, password);
      console.log(result);
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = AuthController;
