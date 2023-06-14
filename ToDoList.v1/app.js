import express  from "express";
import dir from "path";
import bodyParser from "body-parser";

const app = express();
var items =[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
const dirname = dir.resolve();
app.use(express.static("public"));


let day = new Date;
let date = day.toDateString();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/", function(req, res){

    res.render('list', {today: date, newItem: items});
    console.log(dirname + "public");
    
})

app.post("/", function(req, res){

    items.push(req.body.userInput);
    res.redirect("/");
})

app.listen(3000, function(){

    console.log("Surver started");
})