const express = require('express');
const app = express();

// Import route handlers
const usersRouter = require('./routes/users');
const photosRouter = require('./routes/photos');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/users', usersRouter);
app.use('/photosOfUser', photosRouter);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});