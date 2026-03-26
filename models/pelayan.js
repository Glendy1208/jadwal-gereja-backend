'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelayan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi ke tabel KompetensiPelayan
      Pelayan.hasMany(models.KompetensiPelayan, {
        foreignKey: 'id_pelayan',
        as: 'kompetensi'
      });
    }
  }
  Pelayan.init({
    id_pelayan: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nama_pelayan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pelayan',
  });
  return Pelayan;
};