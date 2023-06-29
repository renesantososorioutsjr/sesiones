var ruta=require("express").Router();

ruta.get("/",(req, res)=>{
    res.render("inicio");
});

ruta.get("/login",(req, res)=>{
    res.render("login");
});

ruta.post("/revisar",(req,res)=>{
    if(req.body.usuario=="abc" && req.body.password=="123"){
        req.session.usuario=req.body.usuario;
        res.redirect("/bienvenido");
    }
    else{
        res.redirect("/error");
    }
});

ruta.get("/bienvenido",(req,res)=>{
    if(req.session.usuario){
        res.render("bienvenido");
    }
    else{
        res.redirect("/error");
    }
    
});

ruta.get("/error",(req,res)=>{
    res.render("error");
});

ruta.get("/protegido",(req,res)=>{
    if(req.session.usuario){
        res.render("protegido");
    }
    else{
        res.redirect("/error");
    }    
});

ruta.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
});


module.exports=ruta;