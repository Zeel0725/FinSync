import User from "../models/userModel.js";

// @desc   Get all users
// @route  GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Create a new user
// @route  POST /api/users
export const createUser = async (req, res) => {
  console.log("Incoming POST:", req.body); 
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};