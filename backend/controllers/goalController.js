const asyncHandler = require('express-async-handler');

// get goals1
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get the hustle on mate' });
});

// @set goals
// @route POST /api/goals
// @access private
/* use express error handler */
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error({ message: 'Please add a text field' });
  }

  res.status(200).json({ message: 'Set yourself man hustle' });
});

// @update goals
// @route PUT /api/goals/:id
// @access private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Change tactic ${req.params.id}` });
});

// @delete goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Remove goal ${req.params.id} if it's not moving` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
