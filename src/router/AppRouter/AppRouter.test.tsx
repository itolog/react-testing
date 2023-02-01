import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AppRouter from "./AppRouter";

describe("AppRouter", () => {
  it("rendering initial route", async function () {
    const { getByText } = render(<AppRouter />);

    expect(getByText(/HomePage/i)).toBeInTheDocument();
  });

  it("render photo route", async function () {
    const { getByRole } = render(<AppRouter />);
    const user = userEvent.setup();

    await user.click(
      getByRole("link", {
        name: /photo/i,
      }),
    );

    expect(screen.queryByText(/PhotoPage/i)).toBeInTheDocument();
  });

  it("render log in route", async function () {
    const { getByRole } = render(<AppRouter />);
    const user = userEvent.setup();

    await user.click(
      getByRole("link", {
        name: /log in/i,
      }),
    );

    expect(screen.queryByText(/loginpage/i)).toBeInTheDocument();
  });
});
