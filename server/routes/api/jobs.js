const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const Job = require("../../models/Job");
const mongoose = require("mongoose");

//@route        POST api/jobs
//@description  create job
//@access       PUBLIC

router.post("/", async (req, res) => {
  const {
    startdate,
    enddate,
    numberofdays,
    totalprice,
    paid,
    description,
    customerid
  } = req.body;

  try {
    let job = new Job({
      startdate,
      enddate,
      numberofdays,
      totalprice,
      paid,
      description
    });
    await job.save();
    console.log(job);
    await Customer.findByIdAndUpdate(customerid, {
      $push: { jobs: mongoose.Types.ObjectId(job.id) }
    });
    res.status(200).send("Job created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
