const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
   title: {
     type : String,
     required: true, 
   },
   description : String,
   image: {
     url: {
         type: String,
         default: "https://unsplash.com/photos/a-city-skyline-at-night-with-a-train-on-the-tracks-WphTfsf1el4",
         set: (v) =>  v === " " ? "https://unsplash.com/photos/a-city-skyline-at-night-with-a-train-on-the-tracks-WphTfsf1el4"   : v,
     },
     filename: String,
   },
   price: Number,
   location: String,
   country:String,
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
