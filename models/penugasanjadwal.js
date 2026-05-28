'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenugasanJadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi milik JadwalPelayanan
      PenugasanJadwal.belongsTo(models.JadwalPelayanan, {
        foreignKey: 'id_jadwal',
        as: 'jadwal'
      });
      
      // Relasi milik KompetensiPelayan (Siapa yang bertugas dan sebagai apa)
      PenugasanJadwal.belongsTo(models.KompetensiPelayan, {
        foreignKey: 'id_kompetensi',
        as: 'kompetensi_pelayan'
      });

    }
  }
  PenugasanJadwal.init({
    id_penugasan: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    id_jadwal: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_kompetensi: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PenugasanJadwal',
    tableName: 'PenugasanJadwals'
  });
  return PenugasanJadwal;
};