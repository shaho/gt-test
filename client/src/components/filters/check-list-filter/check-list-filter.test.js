import { render, fireEvent } from "@testing-library/react";
import CheckListFilter from ".";

const list = [
  { name: "one", slug: "one" },
  { name: "two", slug: "two" },
  { name: "three", slug: "three" },
];

describe("CheckListFilter Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <CheckListFilter
        title="Brands"
        handler={mockFn}
        list={list}
        selected={["one"]}
      />
    );
    expect(container).toBeTruthy();
    expect(getByText(/one/)).toBeTruthy();
    expect(container.querySelectorAll(".checkbox")).toHaveLength(4);
    expect(container.querySelectorAll(".selected")).toHaveLength(1);
  });
  test("filter the list", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <CheckListFilter
        title="Tags"
        handler={mockFn}
        list={list}
        selected={["one"]}
      />
    );
    const input = container.querySelector(".input");
    fireEvent.change(input, { target: { value: "th" } });
    expect(container.querySelectorAll(".checkbox")).toHaveLength(2);
  });
});
