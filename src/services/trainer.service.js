const { date } = require('joi');
const model = require('../models');
const trainerModel = model.tbl_trainers;

async function getTrainers() {
  result = await trainerModel.findAll({
    where: {
      is_active: '1',
    },
  });
  return result;
}

async function getTrainer(id) {
  result = await trainerModel.findByPk(id);
  console.log(result);
  return result;
}

<<<<<<< HEAD
async function createTrainer(data, photoUrl) {
  console.log(data);
  result = await trainerModel.create({
    trainer_name: data.name,
    trainer_email: data.email,
    trainer_phone: data.phone,
    trainer_address: data.address,
    trainer_photo_url: photoUrl,
    is_active: data.status,
    createdAt: new Date(),
    updatedAt: new Date(),
=======
async function createTrainer(
  Name,
  email,
  phone,
  address,
  photoUrl,
  status,
  createdDate,
  updatedDate
) {
  result = await trainerModel.create({
    trainer_name: Name,
    trainer_email: email,
    trainer_phone: phone,
    trainer_address: address,
    trainer_photo_url: photoUrl,
    is_active: status,
    createdAt: createdDate,
    updatedAt: updatedDate,
>>>>>>> assignment/master
  });
  return result;
}

async function deleteTrainer(id) {
  result = await trainerModel
    .update(
      { is_active: '0' },
      {
        where: {
          id: id,
        },
      }
    )
    .then(() => {
      trainerModel.findAll({
        where: {
          is_active: '1',
        },
      });
    });
  return result;
}

<<<<<<< HEAD
async function updateTrainer(id, req, url) {
=======
async function updateTrainer(id, req) {
>>>>>>> assignment/master
  result = await trainerModel.update(
    {
      trainer_name: req.name,
      trainer_email: req.email,
      trainer_phone: req.phone,
      trainer_address: req.address,
<<<<<<< HEAD
      trainer_photo_url: url,
=======
      trainer_photo_url: req.url,
>>>>>>> assignment/master
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
