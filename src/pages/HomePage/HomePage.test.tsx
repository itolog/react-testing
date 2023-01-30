import React from "react";
import { render, screen, within } from "@testing-library/react";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders HomePage", function () {
    render(<HomePage />);

    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();

    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();

    const button = within(aside).getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
