'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_trainers_topics', [
      {
        trainerId: '1',
        topicId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '3',
        topicId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '5',
        topicId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '4',
        topicId: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '1',
        topicId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '2',
        topicId: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '3',
        topicId: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '1',
        topicId: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: '4',
        topicId: '7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
