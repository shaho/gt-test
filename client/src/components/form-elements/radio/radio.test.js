import { render, fireEvent } from "@testing-library/react";
import Radio from ".";

describe("Radio Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <Radio label="name" slug="slug" selected={false} handler={mockFn} />
    );
    expect(container).toBeTruthy();
    expect(container.querySelector(".selected")).toBeFalsy();
    expect(getByText(/name/)).toBeTruthy();
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledWith("slug");
  });
});
