const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.get("/cors/:data", async (req, res) => {
  //api request
  await axios({
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?location=${req.params.data}&categories=restaurants&limit=50`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  })
    .then((response) => {
      return res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//have the server listen
app.listen(8080, () => {
  console.log("listening on port 8080");
});
