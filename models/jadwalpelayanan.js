'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalPelayanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi Foreign Key ke tabel KategoriIbadah
      JadwalPelayanan.belongsTo(models.KategoriIbadah, {
        foreignKey: 'id_kategori',
        as: 'kategori_ibadah'
      });

      // Relasi ke tabel PenugasanJadwal
      JadwalPelayanan.hasMany(models.PenugasanJadwal, {
        foreignKey: 'id_jadwal',
        as: 'penugasan_jadwal'
      });
    }
  }
  JadwalPelayanan.init({
    id_jadwal: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    id_kategori: {
      type: DataTypes.UUID,
      allowNull: false
    },
    tanggal_ibadah: {
      type: DataTypes.DATE,
      allowNull: false
    },
    catatan_kegiatan: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'JadwalPelayanan',
    tableName: 'JadwalPelayanans'
  });
  return JadwalPelayanan;
};