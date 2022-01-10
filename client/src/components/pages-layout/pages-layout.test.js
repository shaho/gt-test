import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../redux/store";
import PagesLayout from ".";

describe("PagesLayout Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(
      <ReduxProvider store={store}>
        <PagesLayout>hello world</PagesLayout>
      </ReduxProvider>
    );
    expect(container).toBeTruthy();
    expect(getByText(/hello world/)).toBeTruthy();
  });
});
