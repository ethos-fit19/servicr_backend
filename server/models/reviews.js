const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
    customerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    serviceProviderId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "ServiceProvider",
      },
    serviceCtegory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ServiceCategory"
    },
    reviewId:{
        type:String,
        req:true
    },
    starRating:{
        type:String,
    },
comments:{
    type:String,
 },
 from : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
},
to : {  // recieved review from another people
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
}

},{
timestamps : true,
});

mongoose.model("Reviews", reviewsSchema);