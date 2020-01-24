const express = require("express");
const router = express.Router();

const Customer = require("../../models/Customer");

//@route        POST api/customers
//@description  create customer
//@access       PUBLIC

router.post("/", async (req, res) => {
  const { name, address, phone, priceperday } = req.body;
  try {
    //Check if customer exist
    let customer = await Customer.findOne({ name });
    if (customer) {
      console.log(customer);
      return res
        .status(400)
        .json({ errors: [{ msg: "Customer already exist" }] });
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

module.exports = router;
