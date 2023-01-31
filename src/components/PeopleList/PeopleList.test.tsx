import React from "react";
import { render, screen } from "@testing-library/react";

import PeopleList from "./PeopleList";
import { mockUsersData } from "../../shared/moks/usersMockData";

describe("PeopleList", () => {
  it("loading state", function () {
    render(<PeopleList loading={true} error={false} items={[]} />);

    expect(screen.queryByText(/Loading/i)).toBeInTheDocument();
  });

  it("error state", function () {
    render(<PeopleList loading={false} error={true} items={[]} />);

    expect(screen.queryByText(/Something went wrong/i)).toBeInTheDocument();
  });

  it("with an empty array", function () {
    render(<PeopleList loading={false} error={false} items={[]} />);

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("with data", function () {
    render(<PeopleList loading={false} error={false} items={mockUsersData} />);

    expect(screen.queryAllByRole("listitem").length).toBeGreaterThan(1);
  });
});
