import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AppRouter from "./AppRouter";

describe("AppRouter", () => {
  it("rendering/navigating", async function () {
    render(<AppRouter />);
    const user = userEvent.setup();

    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", {
        name: /photo/i,
      }),
    );

    expect(screen.queryByText(/PhotoPage/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", {
        name: /log in/i,
      }),
    );

    expect(screen.queryByText(/loginpage/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", {
        name: /home/i,
      }),
    );

    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
  });
});
