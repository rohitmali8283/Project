const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/1475043801/photo/choice-variation-concept.jpg?s=2048x2048&w=is&k=20&c=AEKgax5KLjeJUvzlMuFwaaBi1F-gEtzdUt2xsfwAvS0=",
        set: (v) => 
            v===" " 
            ? "https://media.istockphoto.com/id/1475043801/photo/choice-variation-concept.jpg?s=2048x2048&w=is&k=20&c=AEKgax5KLjeJUvzlMuFwaaBi1F-gEtzdUt2xsfwAvS0="
            :v,
    },    
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

