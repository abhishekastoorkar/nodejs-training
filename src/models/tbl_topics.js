'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_topics extends Model {
    static associate(models) {
      this.hasMany(models.tbl_trainers_topics, {
        foreignKey: 'topicId',
      });
    }
  }
  tbl_topics.init(
    {
      topicId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      topicName: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'tbl_topics',
    }
  );
  return tbl_topics;
};
