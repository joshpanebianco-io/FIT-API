const db = require('../models');
const { User } = db;

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    res.status(500).send("Server Error");
  }
}

// GET A USER BY ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
}

// UPDATE A USER
const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(req.body);
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send("Server Error");
  }
}

// DELETE A USER
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
}

// Exporting all functions
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
