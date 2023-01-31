import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import MainLayout from "./MainLayout";

describe("MainLayout", () => {
  it("should be rendered with a footer", function () {
    render(
      <Router>
        <MainLayout />
      </Router>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.queryByRole("contentinfo")).toBeInTheDocument();
  });

  it("should not be rendered with a footer", function () {
    render(
      <Router>
        <MainLayout withFooter={false} />
      </Router>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.queryByRole("contentinfo")).toBeNull();
  });
});
