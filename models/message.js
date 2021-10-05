const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,
  message: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("Message", messageSchema);
