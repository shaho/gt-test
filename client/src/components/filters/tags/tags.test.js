import { render } from "@testing-library/react";
import TagsComponent from "./tags";

describe("Tags Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(<TagsComponent />);
    expect(container).toBeTruthy();
    expect(getByText(/Tags/)).toBeTruthy();
  });
});
