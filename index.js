const express = require("express");
const app = express();
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const perguntaModel = require("./database/Pergunta");
//Database
connection.authenticate().then(() => {
    console.log("DB connection succesfull")
}).catch((msgErro) => {
    console.log(msgErro)
});

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
//app.use(express.json);

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    })
    
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    })
})

app.listen(2525, ()=>{
    console.log("The server is running...");
})