'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tbl_topics',
      [
        {
          topic_name: 'Node.js',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'Angular',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'C++',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'Python',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'Android',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'Go lang',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'Html-css',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'javascript',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'AWS',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic_name: 'Microsoft Dotnet',
          is_active: true,
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
