const config = require('../configs/cognitoConfig');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');

class AuthService {
  constructor() {
    const poolData = {
      UserPoolId: config.cognito.userPoolId,
      ClientId: config.cognito.clientId,
    };
    this.userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  }

  async signUp(userData) {
    return await new Promise((resolve, reject) => {
      const name = userData.name;
      const email = userData.email;
      const password = userData.password;
      const username = userData.username;

      const userAttributes = [];
      userAttributes.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: 'email',
          Value: email,
        })
      );
      userAttributes.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: 'name',
          Value: name,
        })
      );
      this.userPool.signUp(
        username,
        password,
        userAttributes,
        null,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            var cognitoUser = result.user;
            resolve(cognitoUser);
          }
        }
      );
    });
  }

  async confirmUser(username, verificationCode) {
    return await new Promise((resolve, reject) => {
      const userData = {
        Username: username,
        Pool: this.userPool,
      };
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async signIn(username, password) {
    var authenticationData = {
      Username: username,
      Password: password,
    };
    return await new Promise((resolve, reject) => {
      const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        authenticationData
      );

      const userData = {
        Username: username,
        Pool: this.userPool,
      };

      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          var accessToken = result.getIdToken().getJwtToken();
          resolve(accessToken);
        },

        onFailure: function (err) {
          reject(err);
        },
      });
    });
  }
}

module.exports = AuthService;
