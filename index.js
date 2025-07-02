// server/index.js
console.log("✅ index.js loaded");

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env and DB
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const pharmacyRoutes = require('./routes/pharmacyRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const areaRoutes = require('./routes/areaRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ NEW
const medicineInfoRoutes = require('./routes/medicineInfoRoutes');

const emergencyRoutes = require('./routes/emergencyRoutes');
const addressRoutes = require('./routes/addressRoutes');
app.use('/api/addresses', addressRoutes);

app.use('/api/emergency', emergencyRoutes);

app.use('/api/medicine-info', medicineInfoRoutes);


app.use('/api/pharmacies', pharmacyRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/auth', authRoutes); // ✅ NEW

// Test
app.get('/api/test', (req, res) => res.json({ message: 'Test route works ✅' }));
app.get('/', (req, res) => res.send('API is running...'));

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
