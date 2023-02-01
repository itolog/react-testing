import React from "react";
import { within } from "@testing-library/react";

import Navigation from "./Navigation";
import navLinks from "./data/navLinks";
import renderWithRouter from "../../../../shared/helpers/tests/renderWithRouter";

describe("Navigation", () => {
  it("should be rendered with links", function () {
    const { getByRole } = renderWithRouter({
      component: <Navigation items={navLinks} />,
    });

    expect(
      getByRole("link", {
        name: /home/i,
      }),
    ).toBeInTheDocument();

    expect(
      getByRole("link", {
        name: /photo/i,
      }),
    ).toBeInTheDocument();

    expect(
      getByRole("link", {
        name: /log in/i,
      }),
    ).toBeInTheDocument();
  });

  it("should be rendered without links", function () {
    const { queryByRole } = renderWithRouter({
      component: <Navigation />,
    });

    const list = queryByRole("list");

    const { queryAllByRole } = within(list);
    const items = queryAllByRole("listitem");

    expect(items.length).toBe(0);
  });
});
