const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//set static path
app.use(express.static(path.join(__dirname, 'public')))

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

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Cutomers',
    users: users
   });
})

app.listen(3000, () => console.log('server started on port 3000'))
