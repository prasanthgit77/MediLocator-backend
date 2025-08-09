# 🏥 MediLocator

MediLocator is a MERN stack web application to search medicines, view medicine details, locate nearby pharmacies, and find emergency hospitals.

---

## 📋 Prerequisites
- Node.js (v16 or later) → [Download](https://nodejs.org/)
- npm (comes with Node.js)
- MongoDB (local or [Atlas](https://www.mongodb.com/atlas))
- Git

---

## ⚙️ Installation & Run
```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/medilocator.git
cd medilocator

# 2️⃣ Install backend dependencies
cd server
npm install

# 3️⃣ Install frontend dependencies
cd ../client
npm install

# 4️⃣ Create .env file in /server
echo "MONGO_URI=mongodb://127.0.0.1:27017/medilocator
JWT_SECRET=your_secret_key
PORT=9090" > ../server/.env

# 5️⃣ Start backend
cd ../server
npm start &

# 6️⃣ Start frontend
cd ../client
npm start
