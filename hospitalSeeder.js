// server/hospitalSeeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Hospital = require('./models/Hospital');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const hospitals = [
  {
    name: 'City Hospital',
    address: '123 Main Street',
    phone: '123-456-7890',
    specialties: ['roadAccident', 'heartAttack', 'fracture']
  },
  {
    name: 'General Hospital',
    address: '456 Oak Avenue',
    phone: '987-654-3210',
    specialties: ['burnInjury', 'heartAttack', 'fracture']
  },
  {
    name: 'Red Cross Clinic',
    address: '789 Pine Lane',
    phone: '555-555-5555',
    specialties: ['roadAccident', 'burnInjury']
  }
];

(async () => {
  try {
    await Hospital.deleteMany();
    await Hospital.insertMany(hospitals);
    console.log('✅ Hospitals seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  }
})();
