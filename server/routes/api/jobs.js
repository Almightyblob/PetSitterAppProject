const express = require("express");
const router = express.Router();
const Customer = require("../../models/Customer");
const Job = require("../../models/Job");
const mongoose = require("mongoose");

//@route        GET api/jobs
//@description  retrieve all jobs
//@access       PUBLIC

router.get("/", async (req, res) => {
  try {
    let jobs = await Job.find({}).populate("customer");
    res.json(jobs);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route        POST api/jobs/:id
//@description  create job
//@access       PUBLIC

router.post("/:id", async (req, res) => {
  const {
    startdate,
    enddate,
    numberofdays,
    totalprice,
    paid,
    description,
    customer
  } = req.body;

  try {
    let job = new Job({
      startdate,
      enddate,
      numberofdays,
      totalprice,
      paid,
      description,
      customer
    });
    await job.save();
    console.log(job);
    await Customer.findByIdAndUpdate(req.params.id, {
      $push: { jobs: mongoose.Types.ObjectId(job.id) }
    });
    res.status(200).send("Job created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route        DELETE api/jobs
//@description  delete job
//@access       PUBLIC

router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).send("Assignment Deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
