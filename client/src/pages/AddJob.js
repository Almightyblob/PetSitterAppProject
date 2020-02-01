import React, { useState, Fragment, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
var moment = require("moment");

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const AddJob = props => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [formData, setFormData] = useState({
    startdate: new Date(),
    enddate: new Date(),
    numberofdays: 0,
    priceperday: 0,
    totalprice: 0,
    paid: false,
    description: "",
    customer: ""
  });

  const fetchItems = async () => {
    const customer = await axios.get(`/api/customers/${props.match.params.id}`);
    const items = customer.data;
    setFormData({
      ...formData,
      priceperday: items.priceperday,
      customer: items._id
    });
  };

  const handleChangeStart = date => {
    setFormData({
      ...formData,
      startdate: date
    });
    console.log(formData);
  };

  const handleChangeEnd = date => {
    console.log("Date, ", formData);
    setFormData({
      ...formData,
      enddate: date
    });
  };

  const calculateDays = () => {
    var newStartDate = moment(formData.startdate).format("YYYY-MM-DD");
    var newEndDate = moment(formData.enddate).format("YYYY-MM-DD");
    var totaldays = moment(newEndDate).diff(moment(newStartDate), "days");
    return totaldays;
  };

  const calculatePrice = days => {
    var price = days * formData.priceperday;
    return price;
  };

  const handleInput = e => {
    setFormData({ ...formData, description: e.target.value });
  };

  const {
    startdate,
    enddate,
    priceperday,
    paid,
    description,
    customer
  } = formData;

  const sendData = async () => {
    let newDays = calculateDays();
    let newTotal = calculatePrice(newDays);
    const newJob = {
      startdate: moment(startdate).format("YYYY-MM-DD"),
      enddate: moment(enddate).format("YYYY-MM-DD"),
      numberofdays: newDays,
      priceperday,
      totalprice: newTotal,
      paid,
      description,
      customer
    };
    console.log(newJob);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newJob);
      const res = await axios.post(
        `/api/jobs/${props.match.params.id}`,
        body,
        config
      );
      console.log(res.data);

      props.history.push(`/auth/customers/${props.match.params.id}`);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Fragment>
      <p>Number of days: {formData.numberOfDays}</p>
      <DatePicker
        selected={formData.startdate}
        onChange={handleChangeStart}
        dateFormat="d MMMM, yyyy"
        todayButton="Today"
      />
      <DatePicker
        selected={formData.enddate}
        onChange={handleChangeEnd}
        minDate={formData.startdate}
        dateFormat="d MMMM, yyyy"
        todayButton="Today"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        placeholder="Add a Comment"
        onChange={handleInput}
      />
      <button onClick={sendData}>Create Assignment</button>
    </Fragment>
  );
};

export default AddJob;
