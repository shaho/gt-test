import { render } from "@testing-library/react";
import FilterBox from ".";

describe("FilterBox Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(
      <FilterBox>hello world</FilterBox>
    );
    expect(container).toBeTruthy();
    expect(getByText(/hello world/)).toBeTruthy();
  });
});
