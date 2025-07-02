// server/routes/addressRoutes.js
const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');

router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find({}, 'address');
    const addresses = hospitals.map(h => h.address);
    res.json([...new Set(addresses)]); // Unique addresses
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
