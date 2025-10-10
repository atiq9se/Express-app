const { validateUserRegistration } = require("../util/user.validate");
const {User} = require('../models/dbmodel')


async function postUser (req, res){
    const { username, email, phone, password, confirm_password} = req.body;

    try{
        const err = await validateUserRegistration({ username, email, phone, password, confirm_password })

        if(err) return res.status(400).send(err);
        
        const existUser = await User.findOne({
            where: {
                email
            }
        });

        if(existUser) return res.status(400).send("Already registered with the email");

        const user = await User.create({
            username,
            email,
            password 
        })

        res.status(201).send(user)
    }
    catch (err) {
    console.error(err);
    res.status(err.status || 500).json({
      message: err.message || "Internal server error",
    });
  }
}

module.exports = {postUser}