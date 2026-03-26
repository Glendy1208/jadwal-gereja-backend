require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Memanggil koneksi database dari folder models bawaan Sequelize
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ message: "API Express & Sequelize sudah berjalan!" });
});

// Admin routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

// Menyalakan server sekaligus mengecek koneksi Sequelize
db.sequelize.authenticate()
    .then(() => {
        console.log('[DATABASE] Berhasil terhubung ke MySQL via Sequelize!');
        app.listen(PORT, () => {
            console.log(`[SERVER] API berjalan di http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('[DATABASE] Gagal terhubung:', err.message);
    });