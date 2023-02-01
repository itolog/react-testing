import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../../store";

interface RenderWithReduxProps {
  component: ReactNode;
  initialState?: string;
}

const renderWithRedux = ({ component }: RenderWithReduxProps = { component: null }) => {
  return render(<Provider store={store}>{component}</Provider>);
};

export default renderWithRedux;
