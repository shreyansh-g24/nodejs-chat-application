const environment = process.env.NODE_ENV || "development";
const dbURL =
  environment === "development" ? "mongodb://127.0.0.1:27017" : "undefined";

module.exports = {
  dbURL,
};
