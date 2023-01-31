import React from "react";
import axios from "axios";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
// TYPES
import { Users } from "../../shared/types";
// COMPONENTS
import HomePage from "./HomePage";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData: Users[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

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
    const promise = Promise.resolve({ data: mockData });
    mockedAxios.get.mockImplementationOnce(() => {
      return promise;
    });

    const { getByRole, findAllByRole } = render(<HomePage />);
    await userEvent.click(getByRole("button"));
    await act(() => {
      return promise;
    });
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);
  });

  it("fetches users from an API and reject", async function () {
    mockedAxios.get.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });

    const { findByText, getByRole } = render(<HomePage />);
    await userEvent.click(getByRole("button"));

    const message = await findByText(/Something went wrong/i);
    expect(message).toBeInTheDocument();
  });
});
