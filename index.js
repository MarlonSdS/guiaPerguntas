const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
//app.use(express.json);

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) =>{
    var titulo = req.body.titulo;
    res.send("Formulário recebido!"+titulo);
})

app.listen(2525, ()=>{
    console.log("The server is running...");
})