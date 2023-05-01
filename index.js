const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(()=> {
    console.log(`Task app is listen ${PORT}`);
})