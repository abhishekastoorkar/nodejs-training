'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_trainers_topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      topicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_topics',
          key: 'topicId',
          as: 'topicId',
        },
      },
      trainerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_trainers',
          key: 'trainerId',
          as: 'trainerId',
        },
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
    await queryInterface.dropTable('tbl_trainers_topics');
  },
};
