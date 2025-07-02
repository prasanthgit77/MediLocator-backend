const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pharmacy = require('./models/Pharmacy');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pharmacies = [
  {
    name: "Apollo Pharmacy",
    address: "1-10-34, Main Road, Jagadamba",
    phone: "9876543210",
    area: "Jagadamba",
    image: "https://apolloimages.com/pharmacy.jpg",
    rating: 4.8,
    medicines: ["paracetamol", "ibuprofen", "amoxicillin", "metformin", "insulin"]
  },
  {
    name: "HealthPlus Store",
    address: "Plot 23, Duvvada Layout",
    phone: "9765432109",
    area: "duvvada",
    image: "https://example.com/healthplus.jpg",
    rating: 4.4,
    medicines: ["azithromycin", "cough syrup", "cetirizine", "vitamin C", "calcium"]
  },
  {
    name: "MediCare Chemists",
    address: "Opp. Bus Stop, Akkayapalem",
    phone: "9123456780",
    area: "akkayapalem",
    image: "https://example.com/medicare.jpg",
    rating: 4.1,
    medicines: ["paracetamol", "hydroxychloroquine", "omeprazole", "dolo 650", "antacid"]
  },
  {
    name: "Wellness Pharmacy",
    address: "Beside Petrol Bunk, Sheelanagar",
    phone: "9345612780",
    area: "sheelanagar",
    image: "https://example.com/wellness.jpg",
    rating: 4.6,
    medicines: ["cough syrup", "aspirin", "losartan", "atorvastatin", "insulin"]
  },
  {
    name: "Global Pharmacy",
    address: "Sector 7, MVP Colony",
    phone: "9012345678",
    area: "mvpColony",
    image: "https://example.com/global.jpg",
    rating: 4.3,
    medicines: ["doxycycline", "ibuprofen", "vitamin B12", "diabetes kit", "azithromycin"]
  }
];

const seedDB = async () => {
  try {
    await Pharmacy.deleteMany({});
    await Pharmacy.insertMany(pharmacies);
    console.log('✅ Sample pharmacy data seeded');
    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding data:', err);
  }
};

seedDB();
