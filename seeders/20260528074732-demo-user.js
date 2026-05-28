'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt'); // Panggil modul bcrypt

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Variabel password dalam bentuk plain text
    const passwordDev = "admin123";

    await queryInterface.bulkInsert('Users', [
      {
        id_user: uuidv4(),
        username: 'Glendy',
        email: 'glendy@gereja.com',
        password: bcrypt.hashSync(passwordDev, 10), 
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};