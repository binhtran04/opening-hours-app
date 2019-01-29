import React from "react";
import { render } from "react-testing-library";
import { OpeningHours } from "../index";

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
it("Should render opening hours with header", () => {
  const { getByText } = render(
    <OpeningHours weeklyOpeningHours={openingHours} />
  );

  expect(getByText(/Opening hours/i)).toBeVisible();
  expect(getByText(/monday/i)).toBeVisible();
  expect(getByText(/tuesday/i)).toBeVisible();
  expect(getByText(/saturday/i)).toBeVisible();
  expect(getByText(/sunday/i)).toBeVisible();
  expect(getByText(/closed/i)).toBeVisible();
  expect(getByText(/10 AM - 6 PM/i)).toBeVisible();
  expect(getByText(/10 AM - 11 AM, 4 PM - 1 AM/i)).toBeVisible();
  expect(getByText(/12 PM - 9 PM/i)).toBeVisible();
});
