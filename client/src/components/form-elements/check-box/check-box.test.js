import { render, fireEvent } from "@testing-library/react";
import Checkbox from ".";

describe("Checkbox Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <Checkbox label="name" slug="slug" selected={true} handler={mockFn} />
    );
    expect(container).toBeTruthy();
    expect(container.querySelector(".selected")).toBeTruthy();
    expect(getByText(/name/)).toBeTruthy();
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledWith("slug");
  });
});
