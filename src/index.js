const express = require('express');
const {PORT, email} =  require('./config/server.config');
const homePingController = require('./controllers/home.controller');
const apiRouter = require('./routes');

const app = express();

app.use('/api',apiRouter);


app.listen(PORT,()=>{
    console.log(`Stared server at port :${PORT} ,${email}`)
})