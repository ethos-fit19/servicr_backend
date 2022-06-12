const mongoose = require("mongoose");

const earningsSchema = new mongoose.Schema({
    customerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      serviceProviderId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "ServiceProvider",
      },
      amount: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
      date:{
          type:Date,
      }
});

mongoose.model("Earnings", earningsSchema);