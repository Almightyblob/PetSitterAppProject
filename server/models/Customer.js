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
  }
});
module.exports = Customer = mongoose.model("customer", CustomerSchema);
