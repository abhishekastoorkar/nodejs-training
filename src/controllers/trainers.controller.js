const trainerService = require('../services/trainer.service');
const trainerImage = require('../middleware/trainer.image');

function getTrainers(req, res, next) {
  console.log('in controller');
  trainerService.getTrainers().then((trainers) => {
    console.log(trainers);
    res.status(200).send(trainers);
  });
}

function getTrainer(req, res, next) {
  const id = req.params.id;
  console.log('idd' + id);
  trainerService.getTrainer(id).then((trainers) => {
    console.log(trainers);
    res.status(200).send(trainers);
  });
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

  trainerService
    .createTrainer(
      Name,
      email,
      phone,
      address,
      url,
      status,
      createdDate,
      updatedDate
    )
    .then((result) => {
      console.log('New trainer created');
      res.status(200).send('New trainer created');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}

function deleteTrainer(req, res, next) {
  console.log('in contr' + req.params.id);
  trainerService
    .deleteTrainer(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}

function updateTrainer(req, res, next) {
  trainerService
    .updateTrainer(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
};
