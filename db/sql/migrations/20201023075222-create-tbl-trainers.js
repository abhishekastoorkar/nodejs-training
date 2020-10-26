'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_trainers', {
      trainerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trainerName: {
        type: Sequelize.STRING,
      },
      trainerEmail: {
        type: Sequelize.STRING,
      },
      trainerPhone: {
        type: Sequelize.STRING,
      },
      trainerAddress: {
        type: Sequelize.STRING,
      },
      trainerPhoto: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_trainers');
  },
};
