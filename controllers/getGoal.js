const asyncHandler = require('express-async-handler')
const Goal = require('../models/goals') 
const User = require('../models/user')

const getGoal = async(req, res) => {
    const goals = await Goal.find({user: req.user.id})

    res.status(200).send(goals)
}

//post 
const postGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
   
    const goal = await Goal.create({
      text: req.body.text,
      user: req.user.id
    })
  
    res.status(200).json(goal)
  })
  

const updateGoal = asyncHandler(async(req, res) => {
const goal = await Goal.findById(req.params.id) 
if(!goal) { 
    res.status(400)
    throw new Error('goal not found') 
} 

const user = await User.findById(req.user.id) 

if(!user) {
  res.status(400) 
  throw new Error('user not found')
}

if(goal.user.toString() !== user.id) {
  throw new Error('user not athorized')
}

const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
res.status(200).json(updatedGoal)

})

const deleteGoal = asyncHandler(async(req, res) => {
const goal = await Goal.findById(req.params.id) 

if(!goal){
 res.status(400) 
 throw new Error('goal not found')
}

const user = await User.findById(req.user.id) 

if(!user) {
  res.status(400) 
  throw new Error('user not found')
}

if(goal.user.toString() !== user.id) {
  throw new Error('user not athorized')
}

await Goal.findByIdAndRemove(req.params.id) 
res.status(200).json(req.params.id)
})


module.exports = {getGoal, postGoal, updateGoal, deleteGoal}