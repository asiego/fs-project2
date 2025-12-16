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

// API routes
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

// landing page
app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>REST API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: #f4f4f9;
            color: #333;
          }
          header {
            background: #4CAF50;
            color: white;
            padding: 1rem;
            text-align: center;
          }
          main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 1rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          h1 {
            margin-top: 0;
          }
          code {
            background: #eee;
            padding: 2px 4px;
            border-radius: 4px;
          }
          a {
            color: #4CAF50;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Project 2 REST API</h1>
        </header>
        <main>
          <p>Welcome! This is a simple REST API. Below are the available endpoints:</p>
          <ul>
            <li><code>GET /api/snippets</code> – Get all items</li>
            <li><code>GET /api/snippets/:id</code> – Get a single item by ID</li>
            <li><code>POST /api/snippets</code> – Add a new item (JSON body required)</li>
            <li><code>PUT /api/snippets/:id</code> – Update an existing item (JSON body required)</li>
            <li><code>DELETE /api/snippets/:id</code> – Delete an item by ID</li>
          </ul>
          <p>You can also see the <a href="/api/snippets">list of routes</a>.</p>
          <p>Test the API using <a href="https://www.postman.com/downloads/">Postman</a> or your preferred HTTP client.</p>
        </main>
      </body>
      </html>
    `);
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