const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

const toDoList = [];

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    const textInput = req.body.addItem;
    toDoList.push(textInput);
    console.log(toDoList);
});

app.listen(3000, console.log("Server running on port 3000"));