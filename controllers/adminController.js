const { Pelayan, KompetensiPelayan, TipePelayanan } = require('../models'); // Import model dari folder models

// Fungsi untuk mengambil semua data pelayan (Read All)
const getAllPelayan = async (req, res) => {
  try {
    const pelayans = await Pelayan.findAll({
      order: [['nama_pelayan', 'ASC']],
    });

    // Format response API standar industri
    res.status(200).json({
      success: true,
      message: 'Data pelayan berhasil diambil',
      data: pelayans
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server saat mengambil data',
      error: error.message
    });
  }
};

// Fungsi untuk membuat pelayan baru (Create)
const createPelayan = async (req, res) => {
  try {
    const { nama_pelayan } = req.body;

    // Validasi input
    if (!nama_pelayan || nama_pelayan.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Nama pelayan tidak boleh kosong'
      });
    }

    // Cek apakah pelayan dengan nama yang sama sudah ada
    const existingPelayan = await Pelayan.findOne({
      where: { nama_pelayan: nama_pelayan.trim() }
    });

    if (existingPelayan) {
      return res.status(409).json({
        success: false,
        message: 'Pelayan dengan nama tersebut sudah ada'
      });
    }

    // Buat pelayan baru
    const newPelayan = await Pelayan.create({
      nama_pelayan: nama_pelayan.trim()
    });

    res.status(201).json({
      success: true,
      message: 'Pelayan berhasil dibuat',
      data: newPelayan
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server saat membuat pelayan',
      error: error.message
    });
  }
};

// Fungsi untuk update pelayan (Update)
const updatePelayan = async (req, res) => {
  try {
    const { id_pelayan } = req.params;
    const { nama_pelayan } = req.body;

    // Validasi input
    if (!nama_pelayan || nama_pelayan.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Nama pelayan tidak boleh kosong'
      });
    }

    // Cek apakah pelayan dengan ID tersebut ada
    const pelayan = await Pelayan.findByPk(id_pelayan);

    if (!pelayan) {
      return res.status(404).json({
        success: false,
        message: 'Pelayan tidak ditemukan'
      });
    }

    // Cek apakah nama baru sudah digunakan oleh pelayan lain
    const existingPelayan = await Pelayan.findOne({
      where: { 
        nama_pelayan: nama_pelayan.trim(),
        id_pelayan: { [require('sequelize').Op.ne]: id_pelayan }
      }
    });

    if (existingPelayan) {
      return res.status(409).json({
        success: false,
        message: 'Nama pelayan tersebut sudah digunakan oleh pelayan lain'
      });
    }

    // Update pelayan
    await pelayan.update({
      nama_pelayan: nama_pelayan.trim()
    });

    res.status(200).json({
      success: true,
      message: 'Pelayan berhasil diupdate',
      data: pelayan
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server saat mengupdate pelayan',
      error: error.message
    });
  }
};

module.exports = {
  getAllPelayan,
  createPelayan,
  updatePelayan
};