import { render } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(<Footer />);
    expect(container).toBeTruthy();
    expect(getByText(/©2019 Market/)).toBeTruthy();
  });
});
