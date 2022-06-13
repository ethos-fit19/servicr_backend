const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
    starRating: {
        type: String,
    },
    review: {
        type: String,
    },
    AddedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    Servicer: {  // recieved review from another people
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceProvider',
    },
    addedOn:{
        type: Date,
    },

});

mongoose.model("Reviews", reviewsSchema);