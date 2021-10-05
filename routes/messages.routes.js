const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messages.controllers");

router.get("/messages", messagesController.index);
router.post("/messages", messagesController.create);
