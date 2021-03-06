const express = require("express");
const {
  login,
  getdata,
  submit,
  hint,
  scoreboard,
  logout,
  coins,
} = require("../controllers/login");
const router = express.Router();

router.post("/auth", login);

router.get("/logout", logout);

router.get("/login", (request, response) => {
  response.render("challenges/login");
});

router.get("/", getdata);

router.post("/submit", submit);

router.get("/hint", hint);

router.get("/coins", coins);

router.get("/leaderboard", scoreboard);

router.get("/contact", (request, response) => {
  response.render("challenges/contact");
});

router.get("/rules", (request, response) => {
  response.render("challenges/rules");
});

router.get("/signup", (request, response) => {
  response.redirect("http://www.acmnitt.in//registration");
});

router.get("/*", (request, response) => {
  response.render("challenges/error");
});

module.exports = router;
