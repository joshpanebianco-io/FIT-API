const db = require('../models');
const { User } = db;
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

// CREATE/REGISTER A NEW USER

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
    }
    // If the email doesn't exist, hash the password and create a new user
    bcrypt.hash(password, 10)
        .then((hash) => {
            User.create({ email, password: hash });
            res.json("User created successfully");
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to create user" });
        });
};


// LOGIN A USER

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      return res.status(400).json({ error: 'Wrong password' });
    }
    res.json({ message: 'Logged in successfully' });
  });
}

module.exports = {
  registerUser,
  loginUser
};
