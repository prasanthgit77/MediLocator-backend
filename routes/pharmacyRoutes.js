const express = require('express');
const router = express.Router();
const Pharmacy = require('../models/Pharmacy');

// GET /api/pharmacies?area=...&medicine=...
router.get('/', async (req, res) => {
  try {
    const { area, medicine } = req.query;

    if (!area || !medicine) {
      return res.status(400).json({ message: 'Area and medicine are required' });
    }

    const pharmacies = await Pharmacy.find({
      area,
      medicines: { $in: [medicine.toLowerCase()] }
    });

    res.json(pharmacies);
  } catch (err) {
    console.error('Error fetching pharmacies:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

