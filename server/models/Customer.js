const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
  priceperday: {
    type: Number
  },
  pets: [
    {
      pettype: String,
      petname: String,
      petcomments: String,
      petphoto: String
    }
  ]
});
module.exports = Customer = mongoose.model("customer", CustomerSchema);
