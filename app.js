const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { engine } = require("express/lib/application");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

const toDoList = [];
const date = new Date().getFullYear();
const currentDay = new Date().toLocaleDateString();


app.get("/", (req, res)=>{
    res.render("home.ejs", {list: toDoList, currentYear: date, today: currentDay});
});

app.post("/", (req, res)=>{
    const textInput = req.body.addItem;
    toDoList.push(textInput);
    res.redirect("/");
});

app.listen(3000, console.log("Server running on port 3000"));