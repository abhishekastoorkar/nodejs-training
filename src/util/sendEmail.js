const config = require('../configs/config');
var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: config.accessID,
  secretAccessKey: config.secretKey,
  region: 'us-east-1',
});
const model = require('../models');
const trainerModel = model.tbl_trainers;

async function sendEmail(trainerid, topicname, startdate, enddate) {
  const mail = await trainerModel.findAll({
    attributes: ['trainerEmail', 'trainerName'],
    where: {
      trainerId: trainerid,
    },
  });
  var [email] = JSON.parse(JSON.stringify(mail));

  console.log(email.trainerEmail, email.trainerName);

  var params = {
    Destination: {
      ToAddresses: ['astoorkar.abhishek@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data:
            'Dear Mr ' +
            email.trainerName +
            ', this email is to inform you about your new ' +
            topicname +
            ' course which is scheduled' +
            'on start-date :' +
            startdate +
            '+ to end-date :' +
            enddate +
            '',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New Course Schedule',
      },
    },
    Source: 'abhishekastoorkar@gmail.com',
  };
  var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
    .sendEmail(params)
    .promise();
  sendPromise
    .then(function (data) {
      console.log(data.MessageId);
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });
}
module.exports = {
  sendEmail: sendEmail,
};
