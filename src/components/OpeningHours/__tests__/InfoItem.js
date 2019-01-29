import React from "react";
import { render } from "react-testing-library";
import InfoItem from "../InfoItem";

import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

const monday = { dayOfWeek: "monday", hours: [] };
const tuesday = {
  dayOfWeek: "tuesday",
  hours: [
    {
      type: "open",
      value: 36000
    },
    {
      type: "close",
      value: 64800
    }
  ]
};

const saturday = {
  dayOfWeek: "saturday",
  hours: [
    {
      type: "close",
      value: 3600
    },
    {
      type: "open",
      value: 36000
    },
    {
      type: "close",
      value: 39600
    },
    {
      type: "open",
      value: 57600
    }
  ]
};
const sunday = {
  dayOfWeek: "sunday",
  hours: [
    {
      type: "close",
      value: 3600
    },
    {
      type: "open",
      value: 43200
    },
    {
      type: "close",
      value: 75600
    }
  ]
};
it("Should render monday opening hours", () => {
  const { getByText } = render(
    <InfoItem currentDay={monday} nextDay={tuesday} />
  );

  expect(getByText(/monday/i)).toBeVisible();
  expect(getByText(/closed/i)).toBeVisible();
});

it("Should render saturday opening hours", () => {
  const { getByText } = render(
    <InfoItem currentDay={saturday} nextDay={sunday} />
  );

  expect(getByText(/saturday/i)).toBeVisible();
  expect(getByText(/10 AM - 11 AM, 4 PM - 1 AM/i)).toBeVisible();
});
