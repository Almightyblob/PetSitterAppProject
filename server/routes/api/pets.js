const express = require("express");
const router = express.Router();

const Pet = require("../../models/Pet");

//@route        POST api/pets
//@description  create pet
//@access       PUBLIC

router.post("/", async (req, res) => {
  const { type, name, comment } = req.body;
  try {
    let pet = new Pet({
      type,
      name,
      comment
    });
    await pet.save();
    res.status(200).send("Pet created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
