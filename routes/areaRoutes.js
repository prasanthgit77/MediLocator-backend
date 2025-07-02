const express = require('express');
const router = express.Router();
const Pharmacy = require('../models/Pharmacy');

// Get unique areas from all pharmacies
router.get('/', async (req, res) => {
  try {
    const result = await Pharmacy.aggregate([
      { $group: { _id: '$area' } },
      { $project: { _id: 0, area: '$_id' } }
    ]);
    const areas = result.map(item => item.area);
    res.json(areas);
  } catch (err) {
    console.error('Error fetching areas:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
