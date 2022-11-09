const asyncHandler = require('express-async-handler')

const getGoal = async(req, res) => {
    res.json({message: "working 100%"})
}

const postGoal  = asyncHandler(async(req, res) => {

})

const updateGoal = asyncHandler(async(req, res) => {

})

const deleteGoal = asyncHandler(async(req, res) => {

})


module.exports = {getGoal, postGoal, updateGoal, deleteGoal}