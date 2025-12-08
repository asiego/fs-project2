const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test if env is loaded correctly
console.log("MongoDB URI:", process.env.MONGO_URI);

// routes
const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

app.get('/api/routes', (req, res) => {
    res.json({
      routes: [
        { method: 'GET', path: '/api/items' },
        { method: 'GET', path: '/api/items/:id' },
        { method: 'POST', path: '/api/items' },
        { method: 'PUT', path: '/api/items/:id' },
        { method: 'DELETE', path: '/api/items/:id' }
      ]
    });
  });

  
app.get('/', (req, res) => {
    res.send('Welcome to my REST API! Use /api/items to access the items.');
});


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 3000; // Use environment port or default to 3000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    });