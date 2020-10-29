'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_training_programs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_trainers, {
        foreignKey: 'trainerId',
      });
      this.hasMany(models.tbl_trainer_schedule, {});
    }
  }
  tbl_training_programs.init(
    {
      trainingId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      topicName: DataTypes.STRING,
      trainerId: DataTypes.INTEGER,
      registrationStartDate: DataTypes.DATE,
      registrationEndDate: DataTypes.DATE,
      maxAttendees: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'tbl_training_programs',
    }
  );
  return tbl_training_programs;
};
