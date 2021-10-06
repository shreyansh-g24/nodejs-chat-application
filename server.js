const { dbURL } = require("./constants");
const {
  messagesRouter,
  messagesNamespace,
} = require("./routes/messages.routes");

const morgan = require("morgan");
const express = require("express");

const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use(messagesNamespace, messagesRouter);

const mongoose = require("mongoose");

mongoose.connect(dbURL, (error) => {
  console.log("mongodb connected, errors: ", error);
});

mongoose.Promise = global.Promise;

const server = app.listen(3000, () => {
  console.log(`Server is running on PORT ${server.address().port}`);
});
