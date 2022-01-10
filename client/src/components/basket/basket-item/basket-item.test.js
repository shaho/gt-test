import { render, fireEvent } from "@testing-library/react";
import BasketItem from ".";

describe("BasketItem Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <BasketItem
        name="name"
        slug="slug"
        price="46.79"
        count={16}
        handler={mockFn}
      />
    );
    expect(container).toBeTruthy();
    expect(getByText(/name/)).toBeTruthy();
    expect(getByText(/₺ 46.79/)).toBeTruthy();
    expect(getByText(/16/)).toBeTruthy();
    const increase = container.querySelector(".increase");
    fireEvent.click(increase);
    expect(mockFn).toHaveBeenCalledWith({ slug: "slug" }, "increase");
    const decrease = container.querySelector(".decrease");
    fireEvent.click(decrease);
    expect(mockFn).toHaveBeenCalledWith({ slug: "slug" }, "decrease");
  });
});
