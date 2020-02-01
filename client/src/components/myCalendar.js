import React, { useState, useEffect, Fragment } from "react";
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
    const items = await axios.get("/api/jobs");
    const jobs = items.data;
    let newArray = [...events];
    jobs.forEach(job => [
      newArray.push({
        start: new Date(moment(job.startdate)),
        end: new Date(moment(job.enddate)),
        title: `${job.customer} - ${job.description}`,
        allDay: true,
        paid: job.paid,
        customer: job.customer
      })
    ]);
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
                backgroundColor: "#0e90f4",
                color: "white",
                borderRadius: "0px",
                border: "none"
              };

              if (event.paid) {
                newStyle.backgroundColor = "#00d1b2";
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
