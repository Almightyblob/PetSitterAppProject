const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const Pet = require("../../models/Pet");
const mongoose = require("mongoose");

//@route        POST api/pets
//@description  create pet
//@access       PUBLIC

router.post("/", async (req, res) => {
  const { type, name, comments, customerid } = req.body;

  try {
    let pet = new Pet({
      type,
      name,
      comments
    });
    await pet.save();
    console.log(pet);
    await Customer.findByIdAndUpdate(customerid, {
      $push: { pets: mongoose.Types.ObjectId(pet.id) }
    });
    res.status(200).send("Pet created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
