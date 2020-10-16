const { date } = require('joi');
const model = require('../models');
const trainerModel = model.tbl_trainers;

async function getTrainers() {
  const result = await trainerModel.findAll({
    where: {
      is_active: '1',
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
    trainer_name: data.name,
    trainer_email: data.email,
    trainer_phone: data.phone,
    trainer_address: data.address,
    trainer_photo_url: photoUrl,
    is_active: data.status,
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
      trainer_name: req.name,
      trainer_email: req.email,
      trainer_phone: req.phone,
      trainer_address: req.address,
      trainer_photo_url: url,
      is_active: req.status,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
};
