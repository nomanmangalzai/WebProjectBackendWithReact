const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({

    ItemName: {

        type: String,
        required: true,
    },
    ItemPrice:{
        type: String,
        required: true,
    },
})


// const Cart = new mongoose.model('cart', CartSchema)
const  Cart = new mongoose.model('cart', CartSchema)

module.exports = Cart;