const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

let ms = "Quest Started!";
app.get("/", (req, res) => {
    res.render("home", {
        missionStatus: ms,
    });
});

app.listen(8080, () => {
    console.log(ms);
});
