const model = require('../models');
const { Op } = require('sequelize');
const moment = require('moment');
const date = moment().format('YYYY-MM-DD HH:mm');
const trainerModel = model.tbl_trainers;
const trainingProgramModel = model.tbl_training_programs;
const trainerScheduleModel = model.tbl_trainer_schedule;
const sendMail = require('../util/sendEmail');

async function createTrainingProgram(data) {
  const result = await trainingProgramModel
    .create({
      startDate: data.startDate,
      endDate: data.endDate,
      topicName: data.topicName,
      trainerId: data.trainerId,
      registrationStartDate: data.regiStartDate,
      registrationEndDate: data.regiEndDate,
      maxAttendees: data.maxAttendees,
      createdDate: new Date(),
      updatedDate: new Date(),
    })
    .then(() => {
      trainerScheduleModel.create({
        trainerId: data.trainerId,
        startDate: data.startDate,
        endDate: data.endDate,
        createdDate: new Date(),
        updatedDate: new Date(),
      });
    });
  console.log('res' + result);
  sendMail.sendEmail(
    data.trainerId,
    data.topicName,
    data.startDate,
    data.endDate
  );
  return result;
}

async function getTrainigs() {
  const allTrainings = [];
  const completedTrainings = await trainingProgramModel.findAll({
    where: {
      endDate: {
        [Op.lt]: date,
      },
    },
    include: {
      model: trainerModel,
      required: true,
    },
  });
  const upcomingTrainings = await trainingProgramModel.findAll({
    where: {
      startDate: {
        [Op.gt]: date,
      },
    },
  });
  const ongoingTrainings = await trainingProgramModel.findAll({
    where: {
      endDate: {
        [Op.gt]: date,
      },

      startDate: {
        [Op.lt]: date,
      },
    },
  });
  allTrainings.push(
    { completedTrainings: completedTrainings },
    { upcomingTrainings: upcomingTrainings },
    { ongoingTrainings: ongoingTrainings }
  );
  return allTrainings;
}

module.exports = {
  createTrainingProgram: createTrainingProgram,
  getTrainigs: getTrainigs,
};
