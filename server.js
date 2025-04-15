const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authroutes'); 
const cartRoutes = require('./routes/cartroutes');
const orderRoutes = require('./routes/orderroutes');
const dashboardRoutes = require('./routes/dashboardroutes');
const paymentRoutes = require('./routes/paymentroutes');

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/dashboard', dashboardRoutes); 
app.use('/api/payment', paymentRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MongoDB URI is not defined in .env file");
  process.exit(1);
}

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    // Optional: Keep server running even if MongoDB fails to connect
    // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  });

// Default route
app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
