
const express = require('express')
const dotenv = require('dotenv').config()
const Port = process.env.Port || 5000 

const app = express() 

app.use('/api/goal', require('./routes/getGoal'))


app.listen(Port , () => console.log('server is running', Port))
