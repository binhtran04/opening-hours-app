import React from "react";
import { render } from "react-testing-library";
import InfoList from "../InfoList";

import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

const openingHours = [
  { dayOfWeek: "monday", hours: [] },
  {
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
  },
  {
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
  },
  {
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
  }
];
it("Should render list of opening hours", () => {
  const { getByText } = render(<InfoList weeklyOpeningHours={openingHours} />);

  expect(getByText(/monday/i)).toBeVisible();
  expect(getByText(/tuesday/i)).toBeVisible();
  expect(getByText(/saturday/i)).toBeVisible();
  expect(getByText(/sunday/i)).toBeVisible();
  expect(getByText(/closed/i)).toBeVisible();
  expect(getByText(/10 AM - 6 PM/i)).toBeVisible();
  expect(getByText(/10 AM - 11 AM, 4 PM - 1 AM/i)).toBeVisible();
  expect(getByText(/12 PM - 9 PM/i)).toBeVisible();
});
