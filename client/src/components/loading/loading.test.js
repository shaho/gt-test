import { render } from "@testing-library/react";
import Loading from ".";

describe("Loading Component", () => {
  test("renders with props", () => {
    const { container } = render(<Loading count={6} />);
    expect(container).toBeTruthy();
    expect(container.querySelectorAll(".loading-item")).toHaveLength(6);
  });
});
