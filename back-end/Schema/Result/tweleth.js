const express = require('express');

const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const TwelethClassResult = ({
    fullName:{
        type:String,
        required:true
    },
    institutionName:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true
    },
    physics:{
        type:String
    },
    chemistry:{
        type:String,
    },
    computer:{
        type:String
    },
    urdu:{
        type:String,
        required:true
    },
    english:{
        type:String
    },
    pakStudies:{
        type:String,
    },
    islamiat:{
        type:String
    },
})

module.exports = mongoose.model("Tweleth Class Result", TwelethClassResult);