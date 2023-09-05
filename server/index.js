const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.get("/cors/:dat", async (req, res) => {
  //api request
});

//have the server listen
app.listen(8080, () => {
  console.log("listening on port 8080");
});
