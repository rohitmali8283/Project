const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then( ()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/testListing",async ( req , res ) => {
    let sampleListing = new Listing({
        title: "My new villa",
        discription:"By the Beach",
        price:1200,
        location:"Calangute, Goa",
        country:"India",
    });

    sampleListing.save();
    console.log("sample was saved");
    res.send("Test Successful");
});

app.get("/" , (req,res)=>{
    res.send("Hi, i am Root");
});

app.listen(8080, () =>{
    console.log("App is listening on port 8080.");
});