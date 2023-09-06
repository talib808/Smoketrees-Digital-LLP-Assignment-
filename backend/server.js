const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes/api');


// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/smoketrees-digital-llp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

// Listen for the "connected" event
db.once('connected', () => {
  console.log('Connected to the Database');
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
