const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT; // PORT FOR THE SERVER.


app.listen(PORT,()=>{
    console.log(`Stared server at port   :${PORT}`)
})