'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KategoriIbadah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi ke tabel JadwalPelayanan
      KategoriIbadah.hasMany(models.JadwalPelayanan, {
        foreignKey: 'id_kategori',
        as: 'jadwal_pelayanan'
      });
    }
  }
  KategoriIbadah.init({
    id_kategori: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nama_kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriIbadah',
  });
  return KategoriIbadah;
};