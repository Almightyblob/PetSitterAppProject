const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  startdate: {
    type: String
  },
  enddate: {
    type: String
  },
  numberofdays: {
    type: Number
  },
  totalprice: {
    type: Number
  },
  paid: {
    type: Boolean
  },
  description: {
    type: String
  }
});
module.exports = Job = mongoose.model("jobs", JobSchema);
