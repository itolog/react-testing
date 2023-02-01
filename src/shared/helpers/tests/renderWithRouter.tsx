import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

interface RenderWithRouterProps {
  component: ReactNode;
  initialRoute?: string;
}

const defaultRout = "/";

const renderWithRouter = (
  { component, initialRoute }: RenderWithRouterProps = {
    component: null,
    initialRoute: defaultRout,
  },
) => {
  return {
    user: userEvent.setup(),
    ...render(
      <MemoryRouter initialEntries={[initialRoute ?? defaultRout]}>{component}</MemoryRouter>,
    ),
  };
};

export default renderWithRouter;
