'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KompetensiPelayan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi Foreign Key ke tabel Pelayan
      KompetensiPelayan.belongsTo(models.Pelayan, {
        foreignKey: 'id_pelayan',
        as: 'pelayan'
      });
      
      // Relasi Foreign Key ke tabel TipePelayanan
      KompetensiPelayan.belongsTo(models.TipePelayanan, {
        foreignKey: 'id_tipe_pelayanan',
        as: 'tipe_pelayanan'
      });

      // Relasi ke tabel PenugasanJadwal
      KompetensiPelayan.hasMany(models.PenugasanJadwal, {
        foreignKey: 'id_kompetensi',
        as: 'penugasan_jadwal'
      });
    }
  }
  KompetensiPelayan.init({
    id_kompetensi: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    id_pelayan: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_tipe_pelayanan: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'KompetensiPelayan',
    tableName: 'KompetensiPelayans'
  });
  return KompetensiPelayan;
};