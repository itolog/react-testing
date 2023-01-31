import React from "react";
import { render, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navigation from "./Navigation";
import navLinks from "./data/navLinks";

describe("Navigation", () => {
  it("should be rendered with links", function () {
    const { getByRole } = render(
      <MemoryRouter>
        <Navigation items={navLinks} />
      </MemoryRouter>,
    );

    expect(
      getByRole("link", {
        name: /home/i,
      }),
    ).toBeInTheDocument();

    expect(
      getByRole("link", {
        name: /about/i,
      }),
    ).toBeInTheDocument();

    expect(
      getByRole("link", {
        name: /log in/i,
      }),
    ).toBeInTheDocument();
  });

  it("should be rendered without links", function () {
    const { queryByRole } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    const list = queryByRole("list");

    const { queryAllByRole } = within(list);
    const items = queryAllByRole("listitem");

    expect(items.length).toBe(0);
  });
});
