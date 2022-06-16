const express = require("express");
const router = express.Router();
const { getGoals,setGoal,updateGoal,deleteGoals,} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoals).put(updateGoal)

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
