const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  emailaddress: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('UserList', userSchema);

module.exports = User;
