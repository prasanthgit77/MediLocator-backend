// server/routes/medicineRoutes.js
console.log("💊 medicineRoutes loaded");

const express = require('express');
const router = express.Router();
const Pharmacy = require('../models/Pharmacy');

router.get('/', async (req, res) => {
  try {
    const result = await Pharmacy.aggregate([
      { $unwind: '$medicines' },
      { $group: { _id: null, uniqueMedicines: { $addToSet: '$medicines' } } },
      { $project: { _id: 0, medicines: '$uniqueMedicines' } }
    ]);
    
    res.json(result[0]?.medicines || []);
  } catch (err) {
    console.error('Error fetching medicines:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

