'use strict';
const { v4: uuidv4 } = require('uuid'); // Asumsi Anda sudah meng-install package 'uuid' di backend

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // bulkInsert menerima 3 parameter: Nama Tabel, Array Data, Options
    await queryInterface.bulkInsert('KategoriIbadahs', [
      {
        id_kategori: uuidv4(),
        nama_kategori: 'Ibadah Raya', // Sesuaikan dengan nama kolom di tabel Anda
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_kategori: uuidv4(),
        nama_kategori: 'Ibadah Pemuda / Youth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_kategori: uuidv4(),
        nama_kategori: 'Sekolah Minggu',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // bulkDelete untuk menghapus semua isi tabel KategoriIbadahs jika seeder di-rollback
    await queryInterface.bulkDelete('KategoriIbadahs', null, {});
  }
};