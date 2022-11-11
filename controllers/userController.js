const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')



const registerUser = asyncHandler(async(req, res) => {
const {name, email, password} = req.body  


const checkEmail = await User.findOne({email}) 
if(checkEmail) {
    res.status(400) 
    throw new Error('user already exists')
}

const user = User.create({
    name, 
    email,
    password
})


if(user) {
res.status(200) 
res.json({
 token: getToken(user._id)
})
}else {
    res.status(400) 
    throw new Error('failed to save')
}

})


//login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    
    const user = await User.findOne({ email: email })
    const userPass = await User.findOne({password: password})
  
    if (user && userPass) {
      res.json({
        token: getToken(user._id)
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })

  //get my _id
const getMe = asyncHandler(async(req, res) => {
const {_id, name, email} = await User.findById(req.user.id) 

res.status(200).json({
  _id: _id, 
  name, 
  email
})

})

const getToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}

module.exports = {
    registerUser, 
    getMe, 
    loginUser
}