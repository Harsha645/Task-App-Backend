const express = require('express')
const taskRouter = express.Router()
const {getTask} = require('./controllers/TaskController')

taskRouter.get('/',getTask)

module.exports = taskRouter