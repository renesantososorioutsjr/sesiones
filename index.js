var express=require("express");
var usuarios=require("./rutas/usuarios");
var path=require("path");
var session=require("express-session");
require("dotenv").config();
//Esto es un cambio
var app=express();
app.set("view engine", "ejs");
app.use("/web", express.static(path.join(__dirname,"/web")));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.SECRETO_SESSION,
    resave:true,
    saveUninitialized:true
}));

app.use("/",usuarios);

var port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`);
});