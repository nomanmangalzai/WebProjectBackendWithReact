const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('../src/db/connection')
app.use(bodyParser.json())
app.get(express.json())
require('dotenv').config({ path: __dirname + '/.env' })

const autRoute = require('./routes/auth')

// const itemRoute = require('./routes/item')
const itemRoute = require('./routes/item')
const addtocart = require('./routes/addtocart')

// This is middleware.
app.use('/authUser', autRoute)
app.use('/item', itemRoute)
app.use('/cartcontroller', addtocart)

const PORT = 3007
app.listen(PORT, console.log(`Server Started on port ${PORT}`))
