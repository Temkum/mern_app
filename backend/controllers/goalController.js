const asyncHandler = require('express-async-handler');

// connect model
const Goal = require('../models/goalModel');

// get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  // get user's goals only
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json({ goals });
});

// @set goals
// @route POST /api/goals
// @access private
/* use express error handler */
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error({ message: 'Please add a text field' });
  }

  // set goal
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json({ goal });
});

// @update goals
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  // check if record exist
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found!');
  }

  // check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found!');
  }

  // ensure logged in user matches goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized!');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ updatedGoal });
});

// @delete goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found!');
  }

  // check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found!');
  }

  // ensure logged in user matches goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized!');
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
