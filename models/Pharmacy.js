const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  area: String,
  image: String,
  rating: Number,
  medicines: [String]  // lowercase medicine names
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);
