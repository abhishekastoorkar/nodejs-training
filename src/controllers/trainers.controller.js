const trainerService = require('../services/trainer.service');
const trainerImage = require('../middleware/trainer.image');

async function getTrainers(req, res, next) {
<<<<<<< HEAD
  try {
    const trainers = await trainerService.getTrainers();
    return res.status(200).json({ trainers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTrainer(req, res, next) {
  try {
    const id = req.params.id;
    const trainer = await trainerService.getTrainer(id);
    if (trainer) {
      return res.status(200).json({ trainer });
    }
    return res
      .status(404)
      .send('trainer with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
=======
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
>>>>>>> assignment/master
  }
}

async function createTrainer(req, res, next) {
<<<<<<< HEAD
  try {
    const fileName = req.file.originalname.toString();
    const filePath = req.file.path.toString();
    var photoUrl = await trainerImage.uploadFile(
      filePath,
      req.body.name + '_' + fileName
    );
    const url = photoUrl.toString().replace('%20', '_');

    const trainer = await trainerService.createTrainer(req.body, url);
    return res.status(201).json({
      trainer,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteTrainer(req, res, next) {
  try {
    const result = await trainerService.deleteTrainer(req.params.id);
    console.log(result);
    if (result) {
      res.status(200).send(result);
    }
    throw new Error('Trainer not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateTrainer(req, res, next) {
  console.log(req.file);
  try {
    const fileName = req.file.originalname.toString();
    const filePath = req.file.path.toString();
    var photoUrl = await trainerImage.uploadFile(
      filePath,
      req.body.name + '_' + fileName
    );
    const url = photoUrl.toString().replace('%20', '_');
    console.log('update' + url);

    const updated = await trainerService.updateTrainer(
      req.params.id,
      req.body,
      url
    );
    console.log('value  ' + updated);
    if (parseInt(updated)) {
      const updatedTrainer = await trainerService.getTrainer(req.params.id);
      return res.status(200).json({ trainer: updatedTrainer });
    }
    throw new Error('Trainer not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
=======
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
>>>>>>> assignment/master
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
};
