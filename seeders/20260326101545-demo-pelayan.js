'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const namaPelayan = [
      'Bambang Soenarno',
      'Ivan',
      'Liedya Londa',
      'Ningsih',
      'Gabriel',
      'Sienny R',
      'Sieny W'
    ];

    const pelayan = namaPelayan.map(nama => ({
      id_pelayan: uuidv4(),
      nama_pelayan: nama,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Pelayans', pelayan, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pelayans', null, {});
  }
};
