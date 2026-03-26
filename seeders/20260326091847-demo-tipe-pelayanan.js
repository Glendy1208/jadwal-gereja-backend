'use strict';
const { v4: uuidv4 } = require('uuid'); // Wajib memanggil modul uuid

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tipePelayanan = [
      { nama_tipe_pelayanan: 'Song Leader' },
      { nama_tipe_pelayanan: 'Singer' },
      { nama_tipe_pelayanan: 'Kotbah' },
      { nama_tipe_pelayanan: 'LCD' },
      { nama_tipe_pelayanan: 'Sound' },
      { nama_tipe_pelayanan: 'Doa' },
    ];

    await queryInterface.bulkInsert('TipePelayanans', tipePelayanan.map(tipe => ({
      id_tipe_pelayanan: uuidv4(), // <-- Suntikkan UUID di sini
      ...tipe,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TipePelayanans', null, {});
  }
};