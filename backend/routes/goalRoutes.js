const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoals,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoal);

//or

// // Create
// router.post('/', setGoal)
// // Read
// router.get('/', getGoals);
// // Update
// router.put('/:id', updateGoal)
// // Delete
// router.delete('/:id', deleteGoals)

module.exports = router;
