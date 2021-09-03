const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/profile", (req, res) => {
    res.render("main/profile");
})

app.listen(8080, ()=>{
    console.log("The server is running...");
})