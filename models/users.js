const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (val) => validator.isURL(val),
      message: 'URL validation failed',
    },
  },
});

module.exports = mongoose.model('user', usersSchema);
