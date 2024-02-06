var express = require("express");
var router = express.Router();
const userModel = require("./users");

// router.get("/create", async function (req, res, next) {
//   const createdUser = await userModel.create({
//     username: "Sajid",
//     name: "Sajid",
//     age: 23,
//   });
//   res.send(createdUser);
// });

// router.get("/users", async function (req, res, next) {
//   const findUser = await userModel.find();
//   res.send(findUser);
// });

router.get("/delete", async function (req, res, next) {
  const deleteUser = await userModel.findOneAndDelete();
  res.send(deleteUser);
});

module.exports = router;
