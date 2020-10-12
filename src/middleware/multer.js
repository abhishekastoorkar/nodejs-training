const multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    var dir = './uploads';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    callback(null, dir);
  },
  filename: function (req, file, callback) {
    console.log('filename', file.originalname);
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
module.exports = upload;
