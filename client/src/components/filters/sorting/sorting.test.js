import { render } from "@testing-library/react";
import SortingComponent from "./sorting";

describe("Sorting Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <SortingComponent selectedOrder="PriceLowToHigh" handler={mockFn} />
    );
    expect(container).toBeTruthy();
    expect(getByText(/Price low to high/)).toBeTruthy();
    expect(container.querySelectorAll(".radio")).toHaveLength(4);
  });
});
