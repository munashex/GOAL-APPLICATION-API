const express = require('express') 
const router = express.Router() 
const  { getGoal, postGoal, deleteGoal, updateGoal } = require('../controllers/getGoal')
const protect = require('../middlewares/authMiddleware')


router.route('/').get(protect, getGoal).post(protect, postGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router