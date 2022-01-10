import { render, fireEvent } from "@testing-library/react";
import Items from "./items";

describe("Items Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <Items
        list={[
          {
            name: "one",
            price: "9.99",
            slug: "one",
          },
          {
            name: "two",
            price: "11.99",
            slug: "two",
          },
          {
            name: "three",
            price: "10.99",
            slug: "three",
          },
        ]}
        handler={mockFn}
      />
    );
    expect(container).toBeTruthy();
    expect(container.querySelectorAll("button")).toHaveLength(3);
    expect(getByText(/one/)).toBeTruthy();
    expect(getByText(/10.99/)).toBeTruthy();
  });
});
