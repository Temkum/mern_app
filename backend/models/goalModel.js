// define schema
const mongoose = require('mongoose');

// create schema
const goalSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, 'Please add a text value'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
