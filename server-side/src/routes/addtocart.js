const express = require('express')
const addtocart = require('../constoller/authaddtocart')
const router = express.Router()

router.post('/add-to-cart', addtocart.AddToCart)

module.exports = router
