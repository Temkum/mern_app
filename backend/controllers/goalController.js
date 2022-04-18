// get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get the hustle on mate" });
};

// @set goals
// @route POST /api/goals
// @access private
const setGoals = (req, res) => {
  res.status(200).json({ message: "Set yourself man hustle" });
};

// @update goals
// @route PUT /api/goals/:id
// @access private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Change tactic ${req.params.id}` });
};

// @delete goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = (req, res) => {
  res
    .status(200)
    .json({ message: `Remove goal ${req.params.id} if it's not moving` });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
