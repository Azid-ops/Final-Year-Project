const express = require('express');

const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const UploadData = ({
    role:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    secureKey:{
        type:String
    },
    appliedInstitution:{
        type:Boolean,
    },
    approved:{
        type:Boolean
    }
})

module.exports = mongoose.model("Signup", UploadData);