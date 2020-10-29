'use strict';
const { Model, INTEGER } = require('sequelize');
const trainerService = require('../services/trainer.service');
module.exports = (sequelize, DataTypes) => {
  class tbl_trainers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.tbl_trainers_topics, {
        foreignKey: 'trainerId',
      });
      this.hasMany(models.tbl_trainer_schedule, {
        foreignKey: 'trainerId',
      });
      this.hasMany(models.tbl_training_programs, {
        foreignKey: 'trainerId',
      });
    }
  }
  tbl_trainers.init(
    {
      trainerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      trainerName: DataTypes.STRING,
      trainerEmail: DataTypes.STRING,
      trainerPhone: DataTypes.STRING,
      trainerAddress: DataTypes.STRING,
      trainerPhoto: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'tbl_trainers',
    }
  );
  return tbl_trainers;
};
