const express = require('express');
const router = express.Router();
const adminPelayanController = require('../controllers/adminPelayanController');
const adminTipePelayanController = require('../controllers/adminTipePelayanController');

// Route untuk pelayan
router.get('/get-pelayan', adminPelayanController.getAllPelayan);

// Route untuk tipe pelayan
router.get('/get-tipe-pelayan', adminTipePelayanController.getAllTipePelayan);

module.exports = router;