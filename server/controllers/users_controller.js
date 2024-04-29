const users = require('express').Router();
const db = require('../models');
const { User } = db;

// GET ALL USERS

users.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = users