const express = require('express');

const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const RegisterStudents = ({
    studentClass:{
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
    password:{
        type:String
    }
})

module.exports = mongoose.model("Register Students", RegisterStudents);