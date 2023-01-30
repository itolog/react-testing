import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import MainLayout from "./MainLayout";

describe("MainLayout", () => {
  it("should be rendered with a footer", function () {
    const layout = render(
      <Router>
        <MainLayout />
      </Router>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.queryByRole("contentinfo")).toBeInTheDocument();

    expect(layout).toMatchSnapshot();
  });

  it("should not be rendered with a footer", function () {
    const layout = render(
      <Router>
        <MainLayout withFooter={false} />
      </Router>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.queryByRole("contentinfo")).toBeNull();

    expect(layout).toMatchSnapshot();
  });
});
