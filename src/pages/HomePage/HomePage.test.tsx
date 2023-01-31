import React from "react";
import axios from "axios";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
// DATA
import { mockUsersData } from "../../shared/moks/usersMockData";
// COMPONENTS
import HomePage from "./HomePage";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("HomePage", () => {
  it("renders HomePage", function () {
    render(<HomePage />);

    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();

    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();

    const button = within(aside).getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("fetches users from an API", async function () {
    const promise = Promise.resolve({ data: mockUsersData });
    mockedAxios.get.mockImplementationOnce(() => {
      return promise;
    });

    const { getByRole, findAllByRole } = render(<HomePage />);
    await userEvent.click(getByRole("button"));
    await act(() => {
      return promise;
    });

    expect(mockedAxios.get).toBeCalledTimes(1);

    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);
  });

  it("fetches users from an API and reject", async function () {
    mockedAxios.get.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });

    const { findByText, getByRole } = render(<HomePage />);
    await userEvent.click(getByRole("button"));

    expect(mockedAxios.get).toBeCalledTimes(1);

    const message = await findByText(/Something went wrong/i);
    expect(message).toBeInTheDocument();
  });
});
