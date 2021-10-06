const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messages.controllers");

router.get("", messagesController.index);
router.post("", messagesController.create);

module.exports = {
  messagesRouter: router,
  messagesNamespace: "/messages",
};
