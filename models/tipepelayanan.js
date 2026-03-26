'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipePelayanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi ke tabel KompetensiPelayan
      TipePelayanan.hasMany(models.KompetensiPelayan, {
        foreignKey: 'id_tipe_pelayanan',
        as: 'kompetensi'
      });
    }
  }
  TipePelayanan.init({
    id_tipe_pelayanan: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nama_tipe_pelayanan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipePelayanan',
  });
  return TipePelayanan;
};