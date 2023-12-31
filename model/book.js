const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

//creating our model and export it
module.exports = mongoose.model("Book", BookSchema);
