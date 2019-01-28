import React from "react";
import { render } from "react-testing-library";
import { FileInput } from "./index";

import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

it("should render", () => {
  const { debug, queryByLabelText } = render(<FileInput />);
  debug();
  expect(queryByLabelText(/Choose a JSON file/i)).toBeVisible();
});
