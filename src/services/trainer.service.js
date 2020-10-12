const model = require('../models');
const trainerModel = model.tbl_trainers;

function getTrainers() {
  return new Promise((resolve, reject) => {
    console.log('in service');
    trainerModel
      .findAll({
        where: {
          is_active: '1',
        },
      })
      .then((trainers) => {
        resolve(trainers);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getTrainer(id) {
  return new Promise((resolve, reject) => {
    console.log('in service');
    trainerModel
      .findByPk(id)
      .then((trainer) => {
        resolve(trainer);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function createTrainer(
  Name,
  email,
  phone,
  address,
  photoUrl,
  status,
  createdDate,
  updatedDate
) {
  return new Promise((resolve, reject) => {
    trainerModel
      .create({
        trainer_name: Name,
        trainer_email: email,
        trainer_phone: phone,
        trainer_address: address,
        trainer_photo_url: photoUrl,
        is_active: status,
        createdAt: createdDate,
        updatedAt: updatedDate,
      })
      .then(() => {
        resolve('trainer created');
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function deleteTrainer(id) {
  console.log('in service id' + id);
  return new Promise((resolve, reject) => {
    trainerModel
      .update(
        { is_active: '0' },
        {
          where: {
            id: id,
          },
        }
      )
      .then(() => {
        trainerModel
          .findAll({
            where: {
              is_active: '1',
            },
          })
          .then((trainers) => {
            resolve(trainers);
          })
          .catch((err) => {
            reject(err);
          });
      });
  });
}

function updateTrainer(id, req) {
  return new Promise((resolve, reject) => {
    trainerModel
      .update(
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
      )
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  getTrainer: getTrainer,
  getTrainers: getTrainers,
  createTrainer: createTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer,
};
