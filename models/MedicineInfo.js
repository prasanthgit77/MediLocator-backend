const mongoose = require('mongoose');

const medicineInfoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  uses: String,
  whoCanTake: String,
  whoShouldAvoid: String,
  sideEffects: String,
});

module.exports = mongoose.model('MedicineInfo', medicineInfoSchema);
