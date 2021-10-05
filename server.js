const { dbURL } = require("./constants");
const express = require("express");

const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");

mongoose.connect(dbURL, (error) => {
  console.log("mongodb connected", error);
});

const server = app.listen(3000, () => {
  console.log(`Server is running on PORT ${server.address().port}`);
});
