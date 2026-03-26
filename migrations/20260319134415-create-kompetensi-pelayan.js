'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KompetensiPelayans', {
      id_kompetensi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      id_pelayan: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Pelayans', // Nama tabel referensi (harus persis)
          key: 'id_pelayan'  // Nama kolom di tabel referensi
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      id_tipe_pelayanan: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'TipePelayanans', // Nama tabel referensi
          key: 'id_tipe_pelayanan' // Nama kolom di tabel referensi
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
    await queryInterface.dropTable('KompetensiPelayans');
  }
};