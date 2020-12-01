'use strict';
const moment = require('moment');
const date = moment().format('YYYY-MM-DD HH:mm');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tbl_training_programs',
      [
        {
          trainingId: 1,
          startDate: moment(new Date('2020/10/20')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/11/10')).format('YYYY-MM-DD HH:mm'),
          topicName: 'Node.js',
          trainerId: 1,
          registrationStartDate: moment(new Date('2020/10/05')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/10/10')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
          createdAt: date,
          updatedAt: date,
        },
        {
          trainingId: 2,
          startDate: moment(new Date('2020/11/10')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/11/30')).format('YYYY-MM-DD HH:mm'),
          topicName: 'Python',
          trainerId: 4,
          registrationStartDate: moment(new Date('2020/10/25')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/10/05')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
          createdAt: date,
          updatedAt: date,
        },
        {
          trainingId: 3,
          startDate: moment(new Date('2020/12/01')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/12/30')).format('YYYY-MM-DD HH:mm'),
          topicName: 'C++',
          trainerId: 5,
          registrationStartDate: moment(new Date('2020/11/20')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/11/25')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
          createdAt: date,
          updatedAt: date,
        },
        {
          trainingId: 4,
          startDate: moment(new Date('2020/11/25')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2020/01/15')).format('YYYY-MM-DD HH:mm'),
          topicName: 'Angular',
          trainerId: 3,
          registrationStartDate: moment(new Date('2020/11/10')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/11/20')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
          createdAt: date,
          updatedAt: date,
        },
        {
          trainingId: 5,
          startDate: moment(new Date('2020/12/25')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2021/01/15')).format('YYYY-MM-DD HH:mm'),
          topicName: 'JAVA',
          trainerId: 2,
          registrationStartDate: moment(new Date('2020/12/10')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/12/20')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
          createdAt: date,
          updatedAt: date,
        },
        {
          trainingId: 6,
          startDate: moment(new Date('2020/12/20')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2021/01/10')).format('YYYY-MM-DD HH:mm'),
          topicName: 'Database',
          trainerId: 1,
          registrationStartDate: moment(new Date('2020/12/10')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/12/15')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
          createdAt: date,
          updatedAt: date,
        },
        {
          trainingId: 7,
          startDate: moment(new Date('2021/01/01')).format('YYYY-MM-DD HH:mm'),
          endDate: moment(new Date('2021/01/30')).format('YYYY-MM-DD HH:mm'),
          topicName: 'AWS',
          trainerId: 4,
          registrationStartDate: moment(new Date('2020/12/20')).format(
            'YYYY-MM-DD HH:mm'
          ),
          registrationEndDate: moment(new Date('2020/12/25')).format(
            'YYYY-MM-DD HH:mm'
          ),
          maxAttendees: 30,
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
