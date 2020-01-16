const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    task :{
        type : String,
        required: true
    },

});

module.exports = mongoose.model("crud", Schema, "crud");