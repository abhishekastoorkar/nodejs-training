'use strict';
const moment = require('moment');
const date = moment().format('YYYY-MM-DD HH:mm');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tbl_trainer_schedules',
      [
        {
          trainerId: '1',
          startDate: moment(new Date('2020/10/20')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/11/10')).format('YYYY-MM-DD HH:mm'),

          createdAt: date,
          updatedAt: date,
        },
        {
          trainerId: '4',
          startDate: moment(new Date('2020/11/10')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/11/30')).format('YYYY-MM-DD HH:mm'),
          createdAt: date,
          updatedAt: date,
        },
        {
          trainerId: '5',
          startDate: moment(new Date('2020/12/01')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/12/30')).format('YYYY-MM-DD HH:mm'),
          createdAt: date,
          updatedAt: date,
        },
        {
          trainerId: '3',
          startDate: moment(new Date('2020/11/25')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/01/15')).format('YYYY-MM-DD HH:mm'),
          createdAt: date,
          updatedAt: date,
        },
        {
          trainerId: '2',
          startDate: moment(new Date('2020/12/25')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2021/01/15')).format('YYYY-MM-DD HH:mm'),
          createdAt: date,
          updatedAt: date,
        },
        {
          trainerId: '1',
          startDate: moment(new Date('2020/12/20')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2021/01/10')).format('YYYY-MM-DD HH:mm'),
          createdAt: date,
          updatedAt: date,
        },
        {
          trainerId: '4',
          startDate: moment(new Date('2020/01/01')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2021/01/30')).format('YYYY-MM-DD HH:mm'),
          createdAt: date,
          updatedAt: date,
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
