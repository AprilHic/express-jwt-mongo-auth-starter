const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String }
})

const User = mongoose.model('User', userSchema)
module.exports = User