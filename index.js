const express = require('express');
const app = express();
const {string, number, object, array} = require('yup');

app.use(express.json())

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

const validateUser = (user)=>{
     const userSchema = object().shape({
        first_name: string()
            .min(3, 'this field must be at first least 3 characters.')
            .max(50, 'this field must be at most 50 characters.')
            .required('this field must not be empty.'),
        last_name: string()
            .min(3, 'this field must be at least 3 characters.')
            .max(50, 'this field must be at most 50 characters.')
            .required('this field must not be empty.')
     })

     return userSchema.validate(user)
}


app.get("/api/users", function(req, res){
    res.send(users)
})

app.post("/api/users", async function(req, res){
    const {
        first_name, 
        last_name
    } = req.body;

   try{
      const response = await validateUser({first_name, last_name});
      console.log(response);
   }
   catch(err){
     console.log(err);
     return res.status(400).send(err.errors[0]);
   }

    const user ={
        id: users.length + 1,
        first_name,
        last_name
    }
    users.push(user);

    res.status(201).send(user);
})

app.get("/api/users/:id", function(req, res){
    const id = req.params;
    const user = users.find(user=>user.id == id)

    if(!user) return res.send("User not found")

    res.send(user)
})

app.put("/api/users/:id", function(req, res){
    const { id }= req.params;
    const {
        first_name, 
        last_name
    } = req.body;

    const user = users.find(user=>user.id == id);

    user = {...user, first_name, last_name}

    res.status(401).send(user)
})

app.patch("/api/users/:id", function(req, res){
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

app.delete("/api/users/:id", function(req, res){
    const { id } = req.params;

    const user = users.find(user=> user.id == id);
    const index = users.indexOf(user);
    user.splice(index, 1);

    res.send(user);
})


app.listen(3000, ()=>{
    console.log("listening on the port 3000")
})