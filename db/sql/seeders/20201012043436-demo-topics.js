'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tbl_topics',
      [
        {
          topicName: 'Node.js',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'Angular',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'C++',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'Python',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'Android',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'Go lang',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'Html-css',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'javascript',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'AWS',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: 'Microsoft Dotnet',
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
