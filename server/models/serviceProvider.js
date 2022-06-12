const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
    spID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    categoryID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ServiceCategory"
    },
    certificates:[{
        certificates:{type:String,}   
     }],
     serviceApprovedStatus:{
      type:Boolean,
      default:false
     }

});

mongoose.model("ServiceProvider", serviceProviderSchema);