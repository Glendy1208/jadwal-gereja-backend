'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenugasanJadwals', {
      id_penugasan: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      id_jadwal: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'JadwalPelayanans', // Mengarah ke tabel Jadwal
          key: 'id_jadwal'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      id_kompetensi: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'KompetensiPelayans', // Mengarah ke tabel Kompetensi Pelayan
          key: 'id_kompetensi'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
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
    await queryInterface.dropTable('PenugasanJadwals');
  }
};