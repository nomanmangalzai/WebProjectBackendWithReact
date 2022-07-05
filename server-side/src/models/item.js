const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  ItemName: {
    type: String,
    required: true,
  },

  ItemPrice: {
    type: String,
    required: true,
  },
})
const Item = new mongoose.model('item', ItemSchema)
module.exports = Item

// const User = new mongoose.model('item', UserSchema)
// module.exports = User
