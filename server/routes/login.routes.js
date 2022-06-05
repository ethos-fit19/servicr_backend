const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json("Hey There");
  console.log("We are inside login");
});

module.exports = router;
