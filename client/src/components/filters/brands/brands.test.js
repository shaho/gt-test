import { render } from "@testing-library/react";
import BrandsComponent from "./brands";

describe("Brands Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(
      <BrandsComponent />
    );
    expect(container).toBeTruthy();
    expect(getByText(/Brands/)).toBeTruthy();
  });
});
