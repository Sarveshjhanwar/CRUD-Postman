const mongoose = require("mongoose");
const db = mongoose.connect('mongodb://localhost:27017/crud', {useNewUrlParser : true}, (error) => {
   if(!error)
   {
       console.log("Successfully Connected to databse");
   }
   else
   {
       console.log("Error in establishing Connection");
   } 
});

module.exports = db;


