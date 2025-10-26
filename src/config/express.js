
const users = require('../../routes/user.routes')
const express = require('express');

module.exports = async function(){
    const app = express();

    app.use(express.json());

    app.use(users)

    app.get("/", (req, res)=>{
        res.send("The server is Running...")
    })

    return app;
}
