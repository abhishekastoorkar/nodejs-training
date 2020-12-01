const trainerService = require('../services/trainerService');
const trainerImage = require('../middleware/imageUpload');
const moment = require('moment');

async function getTrainers(req, res) {
  try {
    const trainers = await trainerService.getTrainers();
    return res.status(200).json({ trainers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTrainer(req, res) {
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

async function createTrainer(req, res) {
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

async function deleteTrainer(req, res) {
  try {
    const result = await trainerService.deleteTrainer(req.params.id);
    if (result[1] == 1) {
      return res.status(200).send('trainer deleted successfully');
    } else {
      throw new Error('Trainer not found');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateTrainer(req, res) {
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
async function getTrainerByTopic(req, res) {
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
async function getTrainerBySchedule(req, res) {
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

async function getTrainingStatics(req, res) {
  const { startDate, endDate } = req.query;
  const firstDate = moment(new Date(startDate)).format('YYYY-MM-DD HH:mm');
  const lastDate = moment(new Date(endDate)).format('YYYY-MM-DD HH:mm');

  try {
    const result = await trainerService.getTrainingStatics(firstDate, lastDate);

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
