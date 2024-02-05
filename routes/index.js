var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/create", async function (req, res, next) {
  const createdUser = await userModel.create({
    username: "Sajid",
    name: "Sajid",
    age: 23,
  });
  res.send(createdUser);
});

module.exports = router;
