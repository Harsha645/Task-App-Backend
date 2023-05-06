const express = require('express')
const taskRouter = express.Router()
const {getTask,setTask,deleteTask,updateTask} = require('../controllers/TaskController')

taskRouter.delete('/:id',deleteTask)
taskRouter.post('/',setTask)

taskRouter.route('/').get(getTask)
// .post(setTask).put(updateTask)
taskRouter.route('/:id').put(updateTask)


module.exports = taskRouter