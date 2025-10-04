const userRouter = require('./routes/users');
const express = require('express');
const app = express();
 
app.use(express.json());

app.use('/api/users', userRouter)


app.listen(3000, ()=>{
    console.log("listening on the port 3000")
})


/*
    Promise, callback hell, async...await(es6 feature)
*/