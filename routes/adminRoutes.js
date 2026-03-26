const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route untuk pelayan
router.get('/get-pelayan', adminController.getAllPelayan);
router.post('/create-pelayan', adminController.createPelayan);
router.put('/update-pelayan/:id_pelayan', adminController.updatePelayan);

module.exports = router;