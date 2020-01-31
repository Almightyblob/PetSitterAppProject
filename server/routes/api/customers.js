const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
const Customer = require("../../models/Customer");

const { validationResult } = require("express-validator");

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

//@route        GET api/customers/:id
//@description  retrieve customer list
//@access       PUBLIC

router.get("/:id", async (req, res) => {
  try {
    let customer = await Customer.findById(req.params.id).populate("pets");
    res.json(customer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route        POST api/customers
//@description  create / update customer
//@access       PUBLIC

router.post("/", async (req, res) => {
  const errors = validationResult(req.body.phone);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, address, phone, priceperday } = req.body;
  try {
    //Check if customer exist
    let customer = await Customer.findOne({ phone });
    if (customer) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Customer already exists" }] });
    }
    customer = new Customer({
      name,
      address,
      phone,
      priceperday
    });
    await customer.save();
    res.json(customer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/edit", async (req, res) => {
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
});

router.post("/validation/phone-number", (req, res) => {
  Customer.findOne({ phone: req.body.phone }).then(customer => {
    if (customer)
      res.status(400).send("A customer with this phone number already exists.");
    else res.status(200).send("Available");
  });
});

module.exports = router;
