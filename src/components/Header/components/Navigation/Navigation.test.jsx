import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./Navigation";
import navLinks from "./data/navLinks";

describe("Navigation", () => {
  it("should be rendered with links", function () {
    render(
      <BrowserRouter>
        <Navigation items={navLinks} />
      </BrowserRouter>,
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should be rendered without links", function () {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    const list = screen.queryByRole("list");

    const { queryAllByRole } = within(list);
    const items = queryAllByRole("listitem");

    expect(items.length).toBe(0);
  });
});
