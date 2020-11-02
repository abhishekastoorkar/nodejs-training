const moment = require('moment');
const model = require('../models');
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');
const trainerModel = model.tbl_trainers;
const topicModel = model.tbl_topics;
const trainTopicModel = model.tbl_trainers_topics;
const trainerScheduleModel = model.tbl_trainer_schedule;

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
  console.log(data);
  const result = await trainerModel.create(
    {
      trainerName: data.name,
      trainerEmail: data.email,
      trainerPhone: data.phone,
      trainerAddress: data.address,
      trainerPhoto: photoUrl,
      status: data.status,
      createdAt: new Date(),
      updatedAt: new Date(),
      tbl_trainers_topics: [
        {
          topicId: data.topicId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    },
    {
      include: [model.tbl_trainers_topics],
    }
  );

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

  return result;
}

async function getTrainerBySchedule(id, startDate) {
  const result = await trainerModel.findAll({
    include: [
      {
        model: trainerScheduleModel,
        where: {
          endDate: {
            [Op.lt]: moment(new Date(startDate)).format('YYYY-MM-DD HH:mm'),
          },
        },
        attributes: [],
      },
      {
        model: trainTopicModel,
        where: { topicId: id },
        attributes: [],
      },
    ],
  });

  return result;
}

async function getTrainingStatics(startDate, endDate) {
  const result = [];
  const conducted = await trainerScheduleModel.findAll({
    group: 'tbl_trainer_schedule.trainerId',

    where: {
      startDate: {
        [Op.gt]: startDate,
      },
      endDate: {
        [Op.lt]: endDate,
      },
    },
    attributes: [
      'tbl_trainer_schedule.trainerId',
      [
        Sequelize.fn('COUNT', Sequelize.col('tbl_trainer_schedule.startDate')),
        'conducted',
      ],
    ],
    include: [
      {
        model: trainerModel,
        attributes: [],
        include: [],
      },
    ],

    raw: true,
  });
  const scheduled = await trainerScheduleModel.findAll({
    group: 'tbl_trainer_schedule.trainerId',

    where: {
      startDate: {
        [Op.gt]: startDate,
      },
      endDate: {
        [Op.gt]: endDate,
      },
    },
    attributes: [
      'tbl_trainer_schedule.trainerId',
      [
        Sequelize.fn('COUNT', Sequelize.col('tbl_trainer_schedule.startDate')),
        'scheduled',
      ],
    ],
    include: [
      {
        model: trainerModel,
        attributes: [],
        include: [],
      },
    ],

    raw: true,
  });

  result.push({ conducted }, { scheduled });
  return result;
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
