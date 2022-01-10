import { render, fireEvent } from "@testing-library/react";
import Item from ".";

describe("Item Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <Item name="name" slug="slug" price="9.99" handler={mockFn} />
    );
    expect(container).toBeTruthy();
    expect(getByText(/name/)).toBeTruthy();
    expect(getByText(/9.99/)).toBeTruthy();
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledWith({
      name: "name",
      price: "9.99",
      slug: "slug",
    });
  });
});
