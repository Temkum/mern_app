const express = require('express');
const router = express.Router();

// import controller method
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

// protect routes
const { protect } = require('../middleware/authMiddleware');

/* router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals); */

// alternatively
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

// export router
module.exports = router;
