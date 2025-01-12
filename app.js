const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

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

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

app.get("/" , (req,res)=>{
    res.send("Hi, i am Root");
});

app.get("/listings/:id", async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs" , {listing});
})

//Index Route
app.get("/listings" , async (req , res) =>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
});


// app.get("/testListing",async ( req , res ) => {
//     let sampleListing = new Listing(
//         {
//         title: "My new villa",
//         discription:"By the Beach",
//         price:1200,
//         location:"Calangute, Goa",
//         country:"India",
//         }
//     );

//     sampleListing.save();
//     console.log("sample was saved");
//     res.send("Test Successful");
// });

app.listen(8080, () =>{
    console.log("App is listening on port 8080.");
});