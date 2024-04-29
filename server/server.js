// Dependencies

const express = require('express');
const app = express();
const { sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Configuration / Middleware

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Controllers

const usersController = require('./controllers/users_controller');
app.use('/api/users', usersController);


//Listen

app.listen(4005, () => {
  console.log('Server is running on port 4005');
});

