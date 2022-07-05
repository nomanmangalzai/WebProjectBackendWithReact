const express = require('express')                    ///Here we create API for add to cart.
const res = require('express/lib/response')
const items = require('../models/addtocart')

exports.AddToCart = async (req, res, next) => {
    console.log("Add to cart API has been called")
}

