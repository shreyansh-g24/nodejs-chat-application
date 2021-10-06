const Message = require("../models/Message");

const index = async (req, res) => {
  Message.find({}, (error, messages) => {
    if (messages) {
      res.status(200).json({
        messages,
        error: null,
      });
    } else {
      res.status(400).json({
        messages: null,
        error,
      });
    }
  });
};

const create = async (req, res) => {
  const message = new Message({
    message: req.body.message,
    name: req.body.name,
  });

  message.save((error) => {
    if (error) {
      res.status(400).json({
        message: null,
        error,
      });
    } else {
      res.status(200).json({
        message,
        error: null,
      });
    }
  });
};

module.exports = {
  index,
  create,
};
