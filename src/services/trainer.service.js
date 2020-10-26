const { date } = require('joi');
const model = require('../models');
const trainerModel = model.tbl_trainers;
const topicModel = model.tbl_topics;
const trainTopicModel = model.tbl_trainers_topics;

async function getTrainers() {
  const result = await trainerModel.findAll({
    where: {
      status: '1',
    },
  });
  return result;
}

async function getTrainer(id) {
  const result = await trainerModel.findByPk(id);

  return result;
}

async function createTrainer(data, photoUrl) {
  const result = await trainerModel.create({
    trainerName: data.name,
    trainerEmail: data.email,
    trainerPhone: data.phone,
    trainerAddress: data.address,
    trainerPhoto: photoUrl,
    status: data.status,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return result;
}

async function deleteTrainer(id) {
  const result = await trainerModel.update(
    { is_active: '0' },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
}

async function updateTrainer(id, req, url) {
  const result = await trainerModel.update(
    {
      trainerName: req.name,
      trainerEmail: req.email,
      trainerPhone: req.phone,
      trainerAddress: req.address,
      trainerPhoto: url,
      status: req.status,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
}

async function getTrainerByTopic(id) {
  const result = await trainerModel.findAll({
    include: [
      {
        model: trainTopicModel,
        where: { topicId: id },
        attributes: [],
      },
    ],
  });
  console.log(result);
  return result;
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
  getTrainerByTopic: getTrainerByTopic,
};
