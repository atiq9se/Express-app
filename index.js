
const users = require('./routes/user.routes')
const express = require('express');
const app = express();

app.use(express.json());

app.use(users)

app.listen(3000, ()=>{
    console.log("listening on the port 3000")
})
 