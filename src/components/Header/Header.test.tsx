import React from "react";

import Header from "./Header";
import renderWithRouter from "../../shared/helpers/tests/renderWithRouter";

describe("App Header", () => {
  it("should be rendered", function () {
    const { getByRole } = renderWithRouter({
      component: <Header />,
    });
    expect(getByRole("navigation")).toBeInTheDocument();
  });
});
