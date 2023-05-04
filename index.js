const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./db/dbConfig")

const taskRout = require('./routs/TaskRouts')

app.use('/',taskRout)

app.listen(PORT,()=> {
    console.log(`Task app is listen ${PORT}`);
})