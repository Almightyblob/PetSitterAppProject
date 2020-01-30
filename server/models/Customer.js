const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

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
  pets: [{ type: ObjectId, ref: "pets" }],
  jobs: [{ type: ObjectId, ref: "jobs" }]
});
module.exports = Customer = mongoose.model("customer", CustomerSchema);
