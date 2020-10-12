const trainerService = require('../services/trainer.service');
const trainerImage = require('../middleware/trainer.image');

async function getTrainers(req, res, next) {
  const result = await trainerService.getTrainers();
  res.status(200).send(result);
}
async function getTrainer(req, res, next) {
  const id = req.params.id;
  const result = await trainerService.getTrainer(id);
  if (!result == null) {
    res.status(200).send(result);
  } else {
    res.send('not found');
  }
}

async function createTrainer(req, res, next) {
  const Name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const status = req.body.status;
  const createdDate = new Date();
  const updatedDate = new Date();
  const fileName = req.file.originalname.toString();
  const filePath = req.file.path.toString();
  var photoUrl = await trainerImage.uploadFile(filePath, Name + '_' + fileName);
  const url = photoUrl.toString().replace('%20', '_');

  const result = await trainerService.createTrainer(
    Name,
    email,
    phone,
    address,
    url,
    status,
    createdDate,
    updatedDate
  );

  res.status(200).send('New trainer created');
}
async function deleteTrainer(req, res, next) {
  const result = await trainerService.deleteTrainer(req.params.id);
  res.status(200).send(result);
}
async function updateTrainer(req, res, next) {
  const result = await trainerService.updateTrainer(req.params.id, req.body);
  res.status(200).send(result);
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
};
