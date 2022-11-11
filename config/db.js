const mongoose = require('mongoose') 

const ConnectDB = async() => {
 try{
  mongoose.connect(process.env.MONGO_URI) 
 console.log(`mongodb connected`.cyan.underline)
 }catch(err){
    console.log(err)
    process.exit(1)
 }
}

module.exports = ConnectDB