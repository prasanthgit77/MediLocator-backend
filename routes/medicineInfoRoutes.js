const express = require('express');
const router = express.Router();
const MedicineInfo = require('../models/MedicineInfo');

// GET /api/medicine-info/:name
router.get('/:name', async (req, res) => {
  try {
    const info = await MedicineInfo.findOne({ name: req.params.name.toLowerCase() });
    if (!info) return res.status(404).json({ message: 'Medicine not found' });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
