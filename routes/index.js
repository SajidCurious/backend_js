var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/create", async function (req, res) {
  let userData = await userModel.create({
    username: "Sajid",
    nickname: "Sajju",
    description: "I love Web Development",
    categories: ["js", "React", "Tailwind", "Next"],
  });
});

// router.get("/flash", function (req, res) {
//   req.flash("age", 24);
//   res.send("bangaya");
// });

// router.get("/check", function (req, res) {
//   console.log(req.flash("age"));
//   res.send("check terminal");
// });

// router.get("/", function (req, res) {
//   res.cookie("age", 25);
//   res.render("index");
// });

// router.get("/read", function (req, res) {
//   console.log(req.cookies.age);
//   res.send("check");
// });

// router.get("/delete", function (req, res) {
//   res.clearCookie("age");
//   res.send("cleared");
// });

// router.get("/", function (req, res) {
//   req.session.khatam = "hello";
//   res.render("index");
// });

// router.get("/session", function (req, res) {
//   console.log(req.session);
//   res.send("Check your session");
// });

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

// router.get("/delete", async function (req, res, next) {
//   const deleteUser = await userModel.findOneAndDelete();
//   res.send(deleteUser);
// });

module.exports = router;
