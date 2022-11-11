const mongoose = require('mongoose') 


const userModel = mongoose.Schema({
    name: {
        type: String, 
        require: [true, "please enter a name"]
    }, 
    password: {
        type: String, 
        require: [true, "please enter a password"]
    }, 
    email: {
        type: String, 
        require: [true, "please enter a email"], 
        unique: true
    }
}, {timestamps: true}) 

module.exports = mongoose.model('User', userModel)