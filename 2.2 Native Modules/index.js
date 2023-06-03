const { error } = require("console");
let fs = require("fs");

fs.writeFile("message.txt", "hello from me", err =>{
    if (err) {
        throw err;
    }
    console.log("file created");
});


fs.readFile("./message.txt", "utf8", (err, data)=> {
    if(err){
        console.log(err);
    }

   let res =  data.replace("me", "dimitar");

   
});
fs.appendFile("message.txt", " \r\n more message \n weasdsfdas", err =>{
    if (err) {
        throw err;
    }
    console.log("file created");
});