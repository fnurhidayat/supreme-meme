const express = require('express');
const User = require('./model/user.js')
const Post = require('./model/post.js')
const app = express()
const Product = require('./model/product.js')
const port = 8000;
app.use(express.json());



app.post('/users', function(req, res){
  let {name, email, password, password_confirmation} = req.body;

  if (password !== password_confirmation) return res
    .status(400)
    .json({
      status: false,
      error: "Password does not match",
    })
  
  else{
  let user = new User ({
    name,
    email,
    password,
    password_confirmation,
  })

  user.save()
    .then(data => {
      res.status(201).json({
        status: true,
        data: data,
      })
    })
    .catch (err => {
      res.status(422).json({
        status: false,
        error: err,
      })
    })
  }
})

app.post('/posts', function(req, res){
  let {title, body} = req.body;

  if (!title || !body) return res
    .status(400)
    .json({
      status: false,
      error: "There is no title or body",
    });

  let post = new Post ({
    title,
    body,
  });

  post.save()
    .then(data => {
      res.status(201).json({
        status: true,
        data: data,
      });
    })
    .catch (err => {
      res.status(422).json({
        status: false,
        error: err,
      });
    })
})

//Create Product
app.post('/products', function(req, res){
  let {name, price, stock} = req.body;

  if (!name || !price || !stock) return res
    .status(400)
    .json({
      status: false,
      error: "Please enter necessary product information!",
    });

  let product = new Product ({
    name,
    price,
    stock,
  });

  product.save()
    .then(data => {
      res.status(201).json({
        status: true,
        data: data,
      });
    })
    .catch (err => {
      res.status(422).json({
        status: false,
        error: err,
      });
    })
})


//Find User
app.get('/users/:id', function(req, res){
  User.find(req.params.id)
  .then(data => res.send(data))
  .catch(err => res.send(err))
})

//Find All User
app.get('/users', function(req, res){
  User.find()
  .then(data => res.send(data))
  .catch(err => res.send(err))
})

//Find Post
app.get('/posts/:id', function(req, res){
  Post.find(req.params.id)
  .then(data => res.send(data))
  .catch(err => res.send(err))
})

//Find All Post
app.get('/posts', function(req, res){
  Post.find()
  .then(data => res.send(data))
  .catch(err => res.send(err))
})

// Update user Express
app.put('/users/:id', function (req, res) {
  User.update(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

// Update post Express
app.put('/posts/:id', function (req, res) {
  Post.update(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => res.send({
      status: false,
      error: err
    }))
})

// Update product Express
app.put('/products/:id', function (req, res) {
  Product.update(req.params.id, req.body)
  .then(data => res.send(data))
  .catch(err => res.send({
    status: false,
    error: err
  }))
})

//Delete Post
app.delete('/posts/:id', function(req, res){
  Post.remove(req.params.id)
  .then(data => res.send(data))
  .catch(err => res.send(err))
})

//Delete User
app.delete('/users/:id', function(req, res){
  User.remove(req.params.id)
  .then(data => res.send(data))
  .catch(err => res.send(err))
})


app.listen(3000, () => console.log('Listening to port 3000!'))