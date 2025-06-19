const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

// Route files
const authRoutes = require('./routes/auth');

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Mount routers
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('SlimFit API is running...');
});

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.stack);
  res.status(statusCode).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Server Error' : err.message
  });
};

app.use(errorHandler);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');
    
    const server = app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      console.error(`Error: ${err.message}`);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

startServer();

module.exports = app;
