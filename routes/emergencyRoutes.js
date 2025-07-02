// server/routes/emergencyRoutes.js
const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');

router.get('/', async (req, res) => {
  const { type, location } = req.query;

  if (!type) return res.status(400).json({ message: 'Emergency type is required' });

  try {
    const query = { specialties: type };
    if (location) {
      query.address = { $regex: new RegExp(location, 'i') }; // case-insensitive match
    }

    const hospitals = await Hospital.find(query);
    res.json(hospitals);
  } catch (error) {
    console.error('Emergency fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
