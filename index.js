
const userRouter = require('./routes/user.routes')
const express = require('express');

const app = express();
app.use(express.json());

app.use('/', userRouter)

app.listen(3000, ()=>{
    console.log("listening on the port 3000")
})
