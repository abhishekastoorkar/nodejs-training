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

async function updateTrainer(id, req) {
  result = await trainerModel.update(
    {
      trainer_name: req.name,
      trainer_email: req.email,
      trainer_phone: req.phone,
      trainer_address: req.address,
      trainer_photo_url: req.url,
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
