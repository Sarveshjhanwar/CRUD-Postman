const express = require("express");
const bodyparser = require("body-parser");
const db = require("./config/db-config");


const app =  express();

app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(bodyparser.json());

app.get('/', (req,res) =>{
    res.send("Crud in making")
});

require("./routes/routes")(app);
app.listen(3000, () =>{
    console.log("Server started at port 3000")
});
