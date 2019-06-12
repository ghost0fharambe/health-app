'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'John',
      password: '$2a$10$uY4Qot50ne5LiLyMUfTdr.qPILnKuSKfzww0eyWx80XC0lf98m0zi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Bob',
      password: '$2a$10$uY4Qot50ne5LiLyMUfTdr.qPILnKuSKfzww0eyWx80XC0lf98m0zi',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};