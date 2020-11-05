const fs = require('fs');
const awsKey = require('../configs/config');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: awsKey.accessID,
  secretAccessKey: awsKey.secretKey,
});
const s3_bucket = 'nodejs-training';

function uploadFile(filePath, fileName) {
  return new Promise((resolve) => {
    const fileContent = fs.readFileSync(filePath);
    let params = { Body: fileContent, Bucket: s3_bucket, Key: fileName };

    s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      } else {
        fs.unlinkSync(filePath);
        resolve(data.Location);
      }
    });
  }).catch((err) => {
    return err;
  });
}

module.exports = { uploadFile: uploadFile };
