const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// register new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists!');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  // password from user input
  const hashedPwd = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({ name, email, password: hashedPwd });

  // check if user was created
  if (user) {
    res.status(201).json({ _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// login user
// @route POST /api/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login user with success' });
});

// get user details
// @route GET /api/login/me
// @access public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'Display user data' });
});

module.exports = { registerUser, loginUser, getMe };
