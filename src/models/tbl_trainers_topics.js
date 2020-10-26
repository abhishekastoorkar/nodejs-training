'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_trainers_topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_topics, {
        foreignKey: 'topicId',
      });
      this.belongsTo(models.tbl_trainers, {
        foreignKey: 'trainerId',
      });
    }
  }
  tbl_trainers_topics.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      topicId: {
        type: DataTypes.INTEGER,
      },
      trainerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'tbl_trainers_topics',
    }
  );
  return tbl_trainers_topics;
};
