const { validateUserRegistration, validateUserUpdate } = require("../util/user.validate");
const User = require('../models/dbmodel');


const allUsers = async(req, res)=>{
    try{
        const users = await User.findAll();
        res.status(200).send(users);
    }
    catch(err){
       console.error(err);
       res.status(500).send('Internal server error!');
    // res.status(err.status || 500).json({
    //   message: err.message || "Internal server error",
    // });
    }
}

const singleUser = async(req, res)=>{
    try{
        const {id }= req.params;
        const user = await User.findOne({
            where: {
                id
            }
        })
        if(!user) return res.status(404).send('User not found');
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
}

const createUser = async (req, res)=>{
    const { username, email, password, confirm_password} = req.body;

    try{
        // const err = await validateUserRegistration({ username, email, phone, password, confirm_password })

        // if(err) return res.status(400).send(err);
        
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
    catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
}

const putUser = async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;

    try{
        const user = await User.findOne({ where: { id } })

        if(!user) return res.status(404).send('user not found')
        const err = await validateUserUpdate({ username, email });
        if(err) return res.status(400).send(err);

        const updateUser = await user.update({
            username,
            email
        })
        if(!updateUser) return res.status(404).send('User not found');
        res.status(201).send(updateUser);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
}

const patchUser = async (req, res)=>{
    const { id } = req.params;
    const {username, email} = req.body;

    try{
        const user = await User.findOne({where: {id}});
        if(!user) return res.status(404).send("user not found");
        const err = await validateUserUpdate({username, email})
        if(err) return res.status(400).send(err);

        if(username)user.update({username});
        if(email)user.update({email});
        res.status(204).send(user)
        
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
}


const deleteUser = async(req, res)=>{
    try{
        const { id } = req.params;

        const user = await User.findOne({
            where:{
                id
            }
        })
        if(!user) return res.status(404).send("user not found");

        await user.destroy();

        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send('Internal server error');
    }
}

module.exports.createUser = createUser;
module.exports.allUsers = allUsers;
module.exports.singleUser = singleUser;
module.exports.putUser = putUser;
module.exports.patchUser = patchUser;
module.exports.deleteUser = deleteUser;