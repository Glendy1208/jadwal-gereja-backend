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

module.exports = {
  getAllPelayan,
};