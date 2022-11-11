const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const ConnectDB = require('./config/db')
const Port = process.env.Port || 5000 

const app = express() 
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

ConnectDB()

app.use('/api/goal', require('./routes/getGoal'))
app.use('/api/user', require('./routes/userRoutes'))


app.listen(Port , () => console.log('server is running', Port))
