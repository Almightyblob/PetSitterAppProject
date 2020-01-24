const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
  type: {
    type: String
  },
  name: {
    type: String
  },
  comment: {
    type: String
  }
});
module.exports = Pet = mongoose.model("pet", PetSchema);
