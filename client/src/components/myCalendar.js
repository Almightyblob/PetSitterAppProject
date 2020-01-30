import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const outsidedate = "2020-01-25";

class myCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(outsidedate),
        end: new Date("2020-01-30"),
        title: "Feed Bruce"
      }
    ]
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-10">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            style={{ height: "60vh" }}
          />
        </div>
      </div>
    );
  }
}

export default myCalendar;
