const { validateUserRegistration } = require("../util/user.validate");

const users = [];

async function registerUser (req, res){
    const { username, email, phone, password, confirm_password} = req.body;

    try{
        const err = await validateUserRegistration({ username, email, phone, password, confirm_password })

        if(err) return res.status(400).send(err)

            const user = {
                id: user.length,
                username,
                email,
                phone,
                password
            }

            users.push(user);

            res.status(201).send(user)
    }
    catch(err){
        err.status(500).send('Internal serve error')
    }
}

module.exports.registerUser = registerUser