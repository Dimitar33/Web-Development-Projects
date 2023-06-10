import express from "express";
import bodyParser from "body-parser";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");

    // ALTERNATIVE ==> res.sendFile("./index.html", {root: "."});
});

app.post("/", function(req, res){

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("the sum is " + result);
    
});

app.get("/bmiCalculator", function(req, res){

    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

    let weight = req.body.num1;
    let height = req.body.num2 / 100;

    let bmi = weight / (Math.pow(height, 2));

    res.send("Your BMI is " + Math.round(bmi));
})

app.listen(3000, function(){

    console.log("server started at port 3000");
})