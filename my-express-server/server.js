import express  from "express";

const app = express();

app.get("/", (req, res)=>{

    res.send("hello");
});

app.get("/contact", (req, res) =>{

    res.send("my contact page");
});

app.get("/about", (req, res) => {

    res.send("about me page");
});

app.listen(3000, () =>{
    console.log("server started at port 3000");
});