import React, { Component } from "react";

import HourInfoList from "./HourInfoList";

class OpeningHours extends Component {
  openingHours = [
    {
      day: "monday",
      hours: ["11 AM - 8 PM"]
    },
    {
      day: "tuesday",
      hours: ["11 AM - 8 PM"]
    },
    {
      day: "wednesday",
      hours: ["11 AM - 8 PM"]
    },
    {
      day: "thursday",
      hours: ["11 AM - 8 PM"]
    },
    {
      day: "friday",
      hours: ["11 AM - 6 PM", "10 PM - 2 AM"]
    },
    {
      day: "saturday",
      hours: ["11 AM - 8 PM"]
    },
    {
      day: "sunday",
      isToday: true,
      hours: []
    }
  ];
  render() {
    return (
      <div>
        <div>Opening hours</div>
        <HourInfoList openingHours={this.openingHours} />
      </div>
    );
  }
}

export default OpeningHours;
