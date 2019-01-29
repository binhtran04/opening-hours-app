import React from "react";
import { render } from "react-testing-library";
import { FileInput } from "./index";

import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

it("Should render Choose a JSON file", () => {
  const { queryByLabelText } = render(<FileInput />);
  expect(queryByLabelText(/Choose a JSON file/i)).toBeVisible();
});
