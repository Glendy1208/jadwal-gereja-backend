const { TipePelayanan } = require('../models');

// Fungsi untuk mengambil semua data tipe pelayan (Read All)
const getAllTipePelayan = async (req, res) => {
  try {
    const tipePelayanans = await TipePelayanan.findAll({
      order: [['nama_tipe_pelayanan', 'ASC']],
    });

    // Format response API standar industri
    res.status(200).json({
      success: true,
      message: 'Data tipe pelayan berhasil diambil',
      data: tipePelayanans
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
  getAllTipePelayan,
};
