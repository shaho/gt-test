import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import NotFound from ".";

describe("NotFound Component", () => {
  test("renders without crash", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <ReduxProvider store={store}>
          <NotFound />
        </ReduxProvider>
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
    expect(getByText(/404 Page Not Found/)).toBeTruthy();
    expect(getByText(/Go back to Home/)).toBeTruthy();
  });
});
