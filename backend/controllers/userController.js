const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// register new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Register user' });
});

// login user
// @route POST /api/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login user' });
});

// get user details
// @route GET /api/login/me
// @access public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'Display user data' });
});

module.exports = { registerUser, loginUser, getMe };
