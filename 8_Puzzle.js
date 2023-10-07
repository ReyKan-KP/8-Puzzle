const bodyParser = require("body-parser");
let ejs = require("ejs");
const express = require("express");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port = 3000;

app.get("/", function (req, res) {
  res.render("8_Puzzle");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
