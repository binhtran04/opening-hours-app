import React from "react";
import { render } from "react-testing-library";
import HoursDisplay from "../HoursDisplay";

import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

it("Should render closed", () => {
  const hours = [];
  const { getByText } = render(<HoursDisplay hours={hours} />);
  expect(getByText(/closed/i)).toBeVisible();
});

it("Should render correct pair", () => {
  const hours = [
    { type: "open", value: 36000 },
    { type: "close", value: 64800 }
  ];
  const { getByText } = render(<HoursDisplay hours={hours} />);
  expect(getByText("10 AM - 6 PM")).toBeVisible();
});

it("Should render correct pairs", () => {
  const hours = [
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
    },
    {
      type: "close",
      value: 3600
    }
  ];
  const { getByText } = render(<HoursDisplay hours={hours} />);
  expect(getByText("10 AM - 11 AM, 4 PM - 1 AM")).toBeVisible();
});
