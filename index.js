const express = require('express');
const app = express();

app.use(express.json())

const products =[
    {id:1, name: "bata shoe 1"}
];

app.get('/', function(req, res){
  res.send("hollo atiq")
  console.log("hi atiq")

})

app.post('/api/products', function(req, res){
    const newProduct = {
        id: products.length+1,
        name: req.body.name
    }
    products.push(newProduct);
    res.send(newProduct)
})

app.get('/api/products', function(req, res){
    res.send(products);
})

app.get('/api/products/:id', function(req, res){
    const id= req.params.id;

    const product = products.find(products=> products.id == id);

    if(!product)return res.send('The product is not found');

    product.name = req.body.name

    console.log(id);

    res.send(product);  
})

app.delete('/api/products/:id', function(req,res){
    const id = req.params.id;
    const product = products.find(product=> product.id == id);

    if(!product) return res.send("the product is not found");

    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send('product removed')
})

app.listen(3000, ()=>{
    console.log("listening on the port 3000")
})