const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);

module.exports = router;
