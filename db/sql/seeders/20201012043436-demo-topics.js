'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tbl_topics',
      [
        {
          topicId: 1,
          topicName: 'Node.js',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 2,
          topicName: 'Angular',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 3,
          topicName: 'C++',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 4,
          topicName: 'Python',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 5,
          topicName: 'Java',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 6,
          topicName: 'Database',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 7,
          topicName: 'AWS',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicId: 8,
          topicName: 'javascript',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
