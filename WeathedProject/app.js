import { error } from "console";
import express, { json } from "express";
import https from "https";

let app = express();

app.get("/", function(req, res){

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=36c91b2923fcedb2a764f0c9b89be18c";
    

   let asd = https.get(apiUrl, function(response){

      response.on("data", function(data){

        let api = JSON.parse(data);

        res.write("<p>asdsad " + api.weather[0].description+"</p>");
        res.write("<h1>the temp is " + api.main.temp + "</h1>");
        res.send();

        console.log(api.main.temp);

       });

    });

});

app.post("/", function(req, res){

    
});

app.listen(3000, function(){

    console.log("surver started on port 300");
});