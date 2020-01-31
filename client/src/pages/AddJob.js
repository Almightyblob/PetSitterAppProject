import React, { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var moment = require("moment");

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const AddJob = () => {
  const [formData, setFormdata] = useState({
    startdate: new Date(),
    enddate: new Date(),
    numberOfDays: 0
  });
  const handleChangeStart = date => {
    setFormdata({
      ...formData,
      startdate: date,
      numberOfDays: moment
        .duration(moment(formData.startdate).diff(formData.enddate, "days"))
        .asDays()
    });
  };

  const handleChangeEnd = date => {
    console.log(formData);
    setFormdata({
      ...formData,
      enddate: date,
      numberOfDays: moment
        .duration(moment(formData.startdate).diff(formData.enddate, "days"))
        .asDays()
    });
    console.log(formData.startdate);
    console.log(formData.enddate);
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
    </Fragment>
  );
};

export default AddJob;
