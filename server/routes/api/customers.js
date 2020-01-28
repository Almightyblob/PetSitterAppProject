const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Customer = require("../../models/Customer");

//@route        GET api/customers
//@description  retrieve customer list
//@access       PUBLIC

router.get("/", async (req, res) => {
  try {
    let customers = await Customer.find({});
    res.json(customers);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route        POST api/customers
//@description  create / update customer
//@access       PUBLIC

router.post("/", async (req, res) => {
  const { name, address, phone, priceperday, id } = req.body;
  try {
    //Check if customer exist
    let customer = await Customer.findById(id);
    if (customer) {
      //update customer
      customer = await Customer.findByIdAndUpdate(
        id,
        {
          name,
          address,
          phone,
          priceperday
        },
        { new: true }
      );
      console.log(customer);
      return res.json(customer);
    }
    customer = new Customer({
      name,
      address,
      phone,
      priceperday
    });
    await customer.save();
    res.status(200).send("Customer created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route        POST api/customers
//@description  add pets
//@access       PUBLIC

router.put("/", async (req, res) => {
  const { pettype, petname, petcomments, petphoto, id } = req.body;
  const newPet = {
    pettype,
    petname,
    petcomments,
    petphoto
  };
  try {
    //add pet
    let customer = await Customer.findById(id);
    customer.pets.unshift(newPet);
    await customer.save();
    res.json(customer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
