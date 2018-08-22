const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//set static path
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => console.log('server started on port 3000'))
