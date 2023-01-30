import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("App Footer", () => {
  it("should be rendered", function () {
    render(<Footer />);

    expect(screen.getByText(/App Footer/i)).toBeInTheDocument();
  });
});
