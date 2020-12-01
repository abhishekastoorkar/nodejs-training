'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_training_programs', {
      trainingId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      topicName: {
        type: Sequelize.STRING,
      },
      trainerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_trainers',
          key: 'trainerId',
          as: 'trainerId',
        },
      },
      registrationStartDate: {
        type: Sequelize.DATE,
      },
      registrationEndDate: {
        type: Sequelize.DATE,
      },
      maxAttendees: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('tbl_training_programs');
  },
};
