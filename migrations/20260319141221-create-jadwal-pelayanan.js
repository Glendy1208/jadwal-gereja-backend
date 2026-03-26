'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JadwalPelayanans', {
      id_jadwal: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      id_kategori: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'KategoriIbadahs', // Nama tabel referensi
          key: 'id_kategori'        // Nama kolom di tabel referensi
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      tanggal_ibadah: {
        type: Sequelize.DATE, // Sequelize.DATE otomatis mencakup tanggal & jam (DATETIME)
        allowNull: false
      },
      catatan_kegiatan: {
        type: Sequelize.STRING,
        allowNull: true // Boleh kosong, diisi jika ibadah Youth hanya doa/meeting
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JadwalPelayanans');
  }
};