const express = require('express') 
const router = express.Router() 
const  { getGoal, postGoal, deleteGoal, updateGoal } = require('../controllers/getGoal')


router.route('/').get(getGoal).post(postGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router