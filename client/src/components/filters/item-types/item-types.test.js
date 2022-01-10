import { render, fireEvent } from "@testing-library/react";
import ItemTypesComponent from "./item-types";

describe("ItemTypes Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <ItemTypesComponent
        types={["one", "two"]}
        activeType="two"
        handler={mockFn}
      />
    );
    expect(container).toBeTruthy();
    expect(container.querySelector(".active")).toBeTruthy();
    expect(getByText(/one/)).toBeTruthy();
    expect(container.querySelectorAll("button")).toHaveLength(2);
    expect(getByText(/two/).getAttribute("class")).toContain("active");
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledWith("one");
  });
});
