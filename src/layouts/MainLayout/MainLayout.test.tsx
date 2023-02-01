import React from "react";

import MainLayout from "./MainLayout";
import renderWithRouter from "../../shared/helpers/tests/renderWithRouter";

describe("MainLayout", () => {
  it("should be rendered with a footer", function () {
    const { getByRole, queryByRole } = renderWithRouter({
      component: <MainLayout />,
    });

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(queryByRole("contentinfo")).toBeInTheDocument();
  });

  it("should not be rendered with a footer", function () {
    const { getByRole, queryByRole } = renderWithRouter({
      component: <MainLayout withFooter={false} />,
    });

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(queryByRole("contentinfo")).toBeNull();
  });
});
