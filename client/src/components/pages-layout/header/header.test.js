import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../../redux/store";
import Header from ".";

describe("Header Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(
      <ReduxProvider store={store}>
        <Header />
      </ReduxProvider>
    );
    expect(container).toBeTruthy();
  });
});
