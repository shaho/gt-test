import { render } from "@testing-library/react";
import BasketComponent from "./basket";

describe("Basket Component", () => {
  test("renders empty basket with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <BasketComponent
        amount="99.99"
        handler={mockFn}
        itemsInBasket={[
          {
            name: "one",
            price: 9.99,
            slug: "one",
            count: 1,
          },
          {
            name: "two",
            price: 90,
            slug: "two",
            count: 1,
          },
        ]}
      />
    );
    expect(container).toBeTruthy();
    expect(getByText(/₺99.99/)).toBeTruthy();
    expect(container.querySelectorAll(".basket-item")).toHaveLength(2);
    expect(getByText(/one/)).toBeTruthy();
    expect(getByText(/two/)).toBeTruthy();
  });
  test("should render empty basket", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <BasketComponent amount="0" handler={mockFn} />
    );
    expect(container).toBeTruthy();
    expect(getByText(/There is no item in your basket!/)).toBeTruthy();
  });
});
