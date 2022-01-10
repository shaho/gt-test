import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";

describe("App Component", () => {
  test("renders without crash", () => {
    const { container } = render(
      <BrowserRouter>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
  });
});
