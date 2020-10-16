'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_trainers', [
      {
        trainer_name: 'steve roger',
        trainer_email: 'steveroger@infomail.com',
        trainer_phone: '020-232432342',
        trainer_address: 'new york USA',
        trainer_photo_url: 'https:aws.s3.image@aws.com',
        is_active: '1',
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
