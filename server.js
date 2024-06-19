// Initialization
// Importing express into express
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const PORTNUMBER = process.env.PORT;

mongoose.connect("mongodb+srv://Kayden:EzPz123@cluster0.otbpo1w.mongodb.net/notesdb").then(function () {
    // App Routes
    // Home Route (/)
    app.get("/", function(req, res){
        res.send("This is the homepage");
    });

    // Notes
    app.get("/notes", function(req, res){
        res.send("This is the Notes Page");
    });
});

// Starting the server on a port
app.listen(PORTNUMBER, ()=> {
    console.log(`server is running in port number ${PORTNUMBER}`);
});