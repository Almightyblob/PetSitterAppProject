import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function MyCalendar(props) {
  const [events, setEvents] = useState([
    {
      start: "",
      end: "",
      title: "",
      allDay: true,
      paid: ""
    }
  ]);

  useEffect(() => {
    fetchItems();
  }, [0]);

  const fetchItems = async () => {
    var jobs = "";
    if (props.id) {
      let customer = await axios.get(`/api/customers/${props.id}`);
      console.log(customer.data.jobs);
      jobs = customer.data.jobs;
    } else {
      let response = await axios.get(`/api/jobs/`);
      jobs = response.data;
    }

    let newArray = [...events];

    if (Object.keys(jobs).length === 0) {
      return;
    } else {
      jobs.forEach(job => {
        if (!job.customer) {
          newArray.push({
            start: new Date(moment(job.startdate)),
            end: new Date(moment(job.enddate)),
            title: `Customer not in DB - ${job.description}`,
            allDay: true,
            paid: job.paid,
            customer: ""
          });
        } else {
          newArray.push({
            start: new Date(moment(job.startdate)),
            end: new Date(moment(job.enddate)),
            title: `${job.customer.name} - ${job.description}`,
            allDay: true,
            paid: job.paid,
            customer: job.customer
          });
        }
      });
    }

    console.log(newArray);
    setEvents(newArray);
  };

  const handleSelectEvent = event => {
    props.history.push(`/auth/customers/${event.customer._id}`);
  };

  {
    return (
      <div className="columns is-centered">
        <div className="column">
          <Calendar
            onSelectEvent={handleSelectEvent}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "80vh" }}
            eventPropGetter={event => {
              let newStyle = {
                backgroundColor: "#2692D9",
                color: "white",
                borderRadius: "0px",
                border: "none"
              };

              if (event.paid) {
                newStyle.backgroundColor = "#02C4A7";
              }

              return {
                className: "",
                style: newStyle
              };
            }}
          />
        </div>
      </div>
    );
  }
}

export default MyCalendar;
