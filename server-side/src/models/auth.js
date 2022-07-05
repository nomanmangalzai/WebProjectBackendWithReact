const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Details: {
    type: String,
    required: true,
  },
})
const User = new mongoose.model('user', UserSchema)
module.exports = User
