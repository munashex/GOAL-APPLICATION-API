const jwt = require('jsonwebtoken')
const User = require('../models/user') 
const asyncHandler = require('express-async-handler')


const protect = asyncHandler(async(req, res, next) => {
 let Token 
 if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {

    Token = req.headers.authorization.split(' ')[1] 
    const verifyToken = await jwt.verify(Token, process.env.JWT_SECRET) 

    req.user = await User.findById(verifyToken.id) 
    next()
    }catch(err){
     res.status(401) 
     throw new Error('not authorized')
    }
 }

 if(!Token) { 
    res.status(401)
     throw Error('no token')}
})

module.exports = protect