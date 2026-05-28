const express = require('express');
const router = express.Router();
const adminPelayanController = require('../controllers/adminPelayanController');

// Route untuk pelayan
router.get('/get-pelayan', adminPelayanController.getAllPelayan);

module.exports = router;