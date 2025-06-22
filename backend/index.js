const express = require('express');
const cors = require('cors');
const app = express();
const port = 2000; 
const mongoDB = require("./db");

// Connect to DB
mongoDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());

// API route
app.use('/api', require('./routes/CreateUser'));

// Root route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
