const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const expressValidator = require('express-validator')

const app = express()

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//set static path
app.use(express.static(path.join(__dirname, 'public')))

//Global vars
app.use((req, res, next) => {
  res.locals.errors = null
  next()
})

// express validator middleware
app.use(expressValidator());﻿

let users = [
  {
    id: 1,
    first_name: 'Sarah',
    last_name: 'Stone',
    email: 'sarahstone@email.com'
  },
  {
    id: 2,
    first_name: 'Jeff',
    last_name: 'Stone',
    email: 'jeffstone@email.com'
  },
  {
    id: 3,
    first_name: 'Mary',
    last_name: 'Stone',
    email: 'marystone@email.com'
  }
]

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Cutomers',
    users: users
   });
})

app.post('/users/add', (req, res) => {
  req.checkBody('first_name', 'First name is required').notEmpty()
  req.checkBody('last_name', 'Last name is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()

  let errors = req.validationErrors()

  if(errors) {
    res.render('index', {
      title: 'Cutomers',
      users: users,
      errors: errors
     });
  } else {
    let newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }
    console.log(newUser)
  }
})

app.listen(3000, () => console.log('server started on port 3000'))
