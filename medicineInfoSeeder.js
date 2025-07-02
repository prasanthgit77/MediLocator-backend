const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MedicineInfo = require('./models/MedicineInfo');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const medicineData = [
  {
    name: "paracetamol",
    uses: "Used to reduce fever and relieve mild to moderate pain.",
    whoCanTake: "Most adults and children above 6 months.",
    whoShouldAvoid: "People with severe liver disease should avoid this medicine.",
    sideEffects: "Nausea, allergic reactions, liver damage with overdose."
  },
  {
    name: "ibuprofen",
    uses: "Used for pain relief, inflammation, and fever reduction.",
    whoCanTake: "Adults and children over 6 months (consult doctor).",
    whoShouldAvoid: "Avoid if you have ulcers, bleeding disorders, or are pregnant (last trimester).",
    sideEffects: "Stomach upset, dizziness, high blood pressure, kidney issues."
  }
];


const seedMedicineInfo = async () => {
  try {
    await MedicineInfo.deleteMany(); // Optional: clears existing
    await MedicineInfo.insertMany(medicineData);
    console.log('✅ Medicine info seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error seeding medicine info:', error);
  }
};

seedMedicineInfo();
