'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_trainers', [
      {
        trainerName: 'steve roger',
        trainerEmail: 'steveroger@infomail.com',
        trainerPhone: '020-232432342',
        trainerAddress: 'new york USA',
        trainerPhoto: 'https:aws.s3.image@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerName: 'donald trump',
        trainerEmail: 'donaldtrump@whitehousemail.com',
        trainerPhone: '020-23243242',
        trainerAddress: 'Washington DC USA',
        trainerPhoto: 'https:aws.s3.donaldtrumpimage@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerName: 'steve jobs',
        trainerEmail: 'stevejobs@apple.com',
        trainerPhone: '020-2232434',
        trainerAddress: 'California USA',
        trainerPhoto: 'https:aws.s3.stevejobs_image@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerName: 'morgan freeman',
        trainerEmail: 'morganfreeman@infomail.com',
        trainerPhone: '020-2323434',
        trainerAddress: 'florida USA',
        trainerPhoto: 'https:aws.s3.morganfreeman_image@aws.com',
        status: '1',
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
