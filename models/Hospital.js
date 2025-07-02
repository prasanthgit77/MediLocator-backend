// server/models/Hospital.js
const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  specialties: [String]
});

module.exports = mongoose.model('Hospital', hospitalSchema);
