import React from "react";
import { render } from "react-testing-library";
import DayDisplay from "../DayDisplay";

import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

it("Should render day and TODAY", () => {
  const { getByText } = render(<DayDisplay day="monday" isToday={true} />);
  expect(getByText(/monday/)).toBeVisible();
  expect(getByText(/TODAY/)).toBeVisible();
});
