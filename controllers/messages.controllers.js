const Message = require("../models/message");

const index = async (req, res) => {
  Message.find({}, (error, messages) => {
    if (messages?.count) {
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
  const message = new Message(req.body);

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
