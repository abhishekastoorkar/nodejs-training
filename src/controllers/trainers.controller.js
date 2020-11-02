const trainerService = require('../services/trainer.service');
const trainerImage = require('../middleware/trainer.image');

async function getTrainers(req, res, next) {
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
  }
}

async function createTrainer(req, res, next) {
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
    console.log('deleet' + result);
    if (result) {
      return res.status(200).send(result);
    }
    throw new Error('Trainer not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateTrainer(req, res, next) {
  try {
    const fileName = req.file.originalname.toString();
    const filePath = req.file.path.toString();
    var photoUrl = await trainerImage.uploadFile(
      filePath,
      req.body.name + '_' + fileName
    );
    const url = photoUrl.toString().replace('%20', '_');
    const updated = await trainerService.updateTrainer(
      req.params.id,
      req.body,
      url
    );

    if (parseInt(updated)) {
      const updatedTrainer = await trainerService.getTrainer(req.params.id);
      return res.status(200).json({ trainer: updatedTrainer });
    }
    throw new Error('Trainer not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
async function getTrainerByTopic(req, res, next) {
  try {
    const result = await trainerService.getTrainerByTopic(req.params.id);
    if (result) {
      return res.status(200).json({ trainers: result });
    }
    throw new Error('trainers not available');
  } catch (error) {
    return res.status(400).send(error.message);
  }
}
async function getTrainerBySchedule(req, res, next) {
  const { topicId, startDate } = req.query;
  try {
    const result = await trainerService.getTrainerBySchedule(
      topicId,
      startDate
    );
    if (result) {
      return res.status(200).json({ trainers: result });
    }
    throw new Error('trainers not available');
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function getTrainingStatics(req, res, next) {
  const { startDate, endDate } = req.query;
  try {
    const result = await trainerService.getTrainingStatics(startDate, endDate);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
  getTrainerByTopic: getTrainerByTopic,
  getTrainerBySchedule: getTrainerBySchedule,
  getTrainingStatics: getTrainingStatics,
};
