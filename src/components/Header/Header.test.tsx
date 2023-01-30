import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

describe("App Header", () => {
  it("should be rendered", function () {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
