const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    var nome = "Marlon Santos";
    var lang = "Javascript";
    var exibirMsg = false;
    res.render("index", {
        nome: nome,
        lang: lang,
        msg: exibirMsg
    });
})

app.listen(8080, ()=>{
    console.log("The server is running...");
})