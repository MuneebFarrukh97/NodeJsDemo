const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const userRouter = require('./routers/user_routes');



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

app.use("/",userRouter);

module.exports = app;