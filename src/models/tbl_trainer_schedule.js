'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_trainer_schedule extends Model {
    static associate(models) {
      this.belongsTo(models.tbl_trainers, {
        foreignKey: 'trainerId',
      });
    }
  }
  tbl_trainer_schedule.init(
    {
      trainerId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'tbl_trainer_schedule',
    }
  );
  return tbl_trainer_schedule;
};
