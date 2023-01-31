import React from "react";
import axios from "axios";
import { render, screen, within } from "@testing-library/react";

import HomePage from "./HomePage";
import { People } from "../../shared/types";
import { userEvent } from "@testing-library/user-event/setup/index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData: People[] = [
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

  it("fetches peoples from an API", async function () {
    mockedAxios.get.mockResolvedValueOnce(() => {
      return Promise.resolve({ data: { results: mockData } });
    });
    const { getByRole, findAllByRole } = render(<HomePage />);
    userEvent.click(getByRole("button"));
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);
  });
});
