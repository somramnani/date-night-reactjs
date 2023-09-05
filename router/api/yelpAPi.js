const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("api/:item", async (req, res) => {
  axios
    .get("https://api.yelp.com/v3/businesses/search", {
      headers: {
        Authorization: `Bearer t915wybDO3WP4B26tfMQd3AfvQQNFnODtP3EvVzYdhWW58RNwjSwA6OEt2mFI4zaWOwMFHgEr9Pzf3sXFiR_VooC8dfCEBqMR2MtifV8r-JEgaDpoOdQ9RcRE4sjXXYx`,
      },
      params: {
        term: req.params.item,
        location: "nyc",
      },
    })
    .then((response) => {
      return res.json(response.data.businesses);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("page is working");
});

module.exports = router;
