const express = require('express');
const router = express.Router();

const { userSchema } = require('../userSchema');

router.use(express.json())

const validateUser = async user =>{
    try{
            await userSchema.validate(user);
            return null;
    }
    catch(err){
        return err.errors[0];
    }
}

const users =[
    {
        id:1, first_name: "atiq", last_name: "rahman"
    },
    {
        id:2, first_name: "batiq", last_name: "rahman"
    },
    {
        id:3, first_name: "catiq", last_name: "rahman"
    }
]

router.get("/", function(req, res){
    res.send(users)
})

router.post("/", async function(req, res){
    const {
        first_name, 
        last_name
    } = req.body;

     try{
        const err = await validateUser({ first_name, last_name});

        if(err) return res.status(400).send(err);

        const user = {
            id: users.length + 1,
            first_name,
            last_name,
        }
        users.push(user);
        res.status(201).send(user);
     }
     catch(err){
        console.log(err);
     }


    // validateUser function not useing
    // try{
    //     await userSchema.validate({first_name, last_name});
        
    //     const user = {
    //         id: users.length + 1,
    //         first_name,
    //         last_name,
    //     }
    //     users.push(user);
    //     res.status(201).send(user);
    // }
    // catch(err){
    //     return res.status(400).send(err.errors[0]);
    // }
})

    // userSchema.validate({first_name, last_name})
        // .then(function(result){
        //     const user ={
        //         id: users.length + 1,
        //         first_name,
        //         last_name
        //     }
        //     users.push(user);

        //     res.status(201).send(user);
        // })
        // .catch(function(err){
        //     return res.status(400).send(err.errors[0]);
        // })

// // callback hell
// validUser(sender)
//     .then(function(){
//         enoughMoney(sender)
//             .then(function(){
//                 validUser(receiver)
//                     .then(function(){
//                         useReducer(sender)
//                             .then(function (){
//                                 increase(receiver, certainAmount)
//                                     .then(function(){
//                                         res.status(200).send('Perfectly sent money done.')
//                                     })
//                                     .catch(function (){

//                                     })
//                             })
//                             .catch(function(){

//                             })
//                     })
//                     .catch(function(){

//                     })
//             })
//             .catch(function(){

//             })
//     })
//     .catch(function(){
        
//     })


// try{
//     await validUser(sender);
//     await enoughMoney(sender);
//     await validUser(receiver);
//     await reduce(sender, certainAmount);
//     await increase(receiver, certainAmount)
// }
// catch(err){
//     return err;
// }

router.get("/:id", function(req, res){
    const id = req.params;
    const user = users.find(user=>user.id == id)

    if(!user) return res.send("User not found")

    res.send(user)
})

router.put("/:id", function(req, res){
    const { id }= req.params;
    const {
        first_name, 
        last_name
    } = req.body;

    const user = users.find(user=>user.id == id);

    user = {...user, first_name, last_name}

    res.status(401).send(user)
})

router.patch("/:id", function(req, res){
    const { id } = req.params.id;
    const { 
        first_name,
        last_name
    } = req.body;

    const user = users.find(user=>user.id == id)

    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;

    res.send(user)
})

router.delete("/:id", function(req, res){
    const { id } = req.params;

    const user = users.find(user=> user.id == id);
    const index = users.indexOf(user);
    user.splice(index, 1);

    res.send(user);
})
 
module.exports = router; 