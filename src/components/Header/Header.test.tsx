import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

describe("App Header", () => {
  it("should be rendered", function () {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
