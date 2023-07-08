const express = require('express');

const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const ninthClass = ({
    email:{
        type:String,
        required:true
    },
    institutionName:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    boardRollNumber:{
        type:String
    }
})

module.exports = mongoose.model("9th Class", ninthClass);