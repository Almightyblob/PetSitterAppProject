import React, { useState, useEffect, Fragment } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(moment().add(1, "days")),
      title: "Some title"
    }
  ]);

  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    debugger;
    const items = await axios.get("/api/jobs");
    const jobs = items.data;
    let newArray = jobs.map(job => [
      ...events,
      {
        start: new Date(moment(job.startdate)),
        end: new Date(moment(job.enddate)),
        title: job.description
      }
    ]);
    console.log(newArray[0]);
    setEvents(newArray[0]);
  };

  {
    return (
      <div className="columns is-centered">
        <div className="column is-10">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "80vh" }}
          />
        </div>
      </div>
    );
  }
}

export default MyCalendar;
