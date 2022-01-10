import { render } from "@testing-library/react";
import NarbarBasketComponent from "./navbar-basket";

describe("NarbarBasket Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(
      <NarbarBasketComponent amount="46.79" />
    );
    expect(container).toBeTruthy();
    expect(getByText(/₺46.79/)).toBeTruthy();
  });
});
