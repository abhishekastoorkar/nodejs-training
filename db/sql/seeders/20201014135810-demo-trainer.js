'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_trainers', [
      {
        trainerId: 1,
        trainerName: 'steve roger',
        trainerEmail: 'abhishek.astoorkar@happiestminds.com',
        trainerPhone: '020-232432342',
        trainerAddress: 'new york USA',
        trainerPhoto: 'https:aws.s3.image@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: 2,
        trainerName: 'donald trump',
        trainerEmail: 'abhishek.astoorkar@happiestminds.com',
        trainerPhone: '020-23243242',
        trainerAddress: 'Washington DC USA',
        trainerPhoto: 'https:aws.s3.donaldtrumpimage@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: 3,
        trainerName: 'steve jobs',
        trainerEmail: 'abhishek.astoorkar@happiestminds.com',
        trainerPhone: '020-2232434',
        trainerAddress: 'California USA',
        trainerPhoto: 'https:aws.s3.stevejobs_image@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: 4,
        trainerName: 'morgan freeman',
        trainerEmail: 'abhishek.astoorkar@happiestminds.com',
        trainerPhone: '020-2323434',
        trainerAddress: 'florida USA',
        trainerPhoto: 'https:aws.s3.morganfreeman_image@aws.com',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainerId: 5,
        trainerName: 'bill gates',
        trainerEmail: 'abhishek.astoorkar@happiestminds.com',
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
