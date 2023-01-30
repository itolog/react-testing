import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import appTest from "../../shared/constants/appTest";

test("App", () => {
  render(<App />);
  const main = screen.getByTestId(appTest.MAIN_LAYOUT_TEST);
  expect(main).toBeInTheDocument();
});
