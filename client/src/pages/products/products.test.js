import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../redux/store";
import ProductsPage from ".";

describe("ProductsPage Component", () => {
  test("renders without crash", () => {
    const { container, getByText } = render(
      <ReduxProvider store={store}>
        <ProductsPage />
      </ReduxProvider>
    );
    expect(container).toBeTruthy();
    expect(getByText(/Products/)).toBeTruthy();
  });
});
