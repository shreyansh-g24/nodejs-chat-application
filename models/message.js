const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const messageSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.String, default: uuidv4() },
  name: mongoose.Schema.Types.String,
  message: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("Message", messageSchema);
