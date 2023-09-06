const express = require("express");
const cors = require("cors");
const axios = require("axios");

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
      Authorization:
        "Bearer t915wybDO3WP4B26tfMQd3AfvQQNFnODtP3EvVzYdhWW58RNwjSwA6OEt2mFI4zaWOwMFHgEr9Pzf3sXFiR_VooC8dfCEBqMR2MtifV8r-JEgaDpoOdQ9RcRE4sjXXYx",
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
