// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Configuration / Middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const usersRoutes = require('./routes/User');
app.use('/api/users', usersRoutes);

// Listen
const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
