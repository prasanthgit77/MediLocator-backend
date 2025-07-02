const MedicineInfo = require('../models/MedicineInfo');

const getMedicineInfo = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) return res.status(400).json({ message: 'Medicine name is required' });

    const info = await MedicineInfo.findOne({ name: name.toLowerCase() });
    if (!info) return res.status(404).json({ message: 'Medicine info not found' });

    res.json(info);
  } catch (error) {
    console.error('Error fetching medicine info:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getMedicineInfo };
