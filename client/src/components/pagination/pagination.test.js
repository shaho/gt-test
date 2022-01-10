import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Pagination from ".";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Pagination
        currentPage={3}
        pagePath="example/"
        totalPages={20}
        numOfItems={9}
      />
    </BrowserRouter>
  );
});
describe("Pagination Component", () => {
  test("render items with href attribute", () => {
    expect(screen.getByText("1").getAttribute("href")).toEqual("/example/");
    expect(screen.getByText("2").getAttribute("href")).toEqual(
      "/example/page/2"
    );
  });

  test("current page class name", () => {
    expect(screen.getByText("3").getAttribute("class")).toEqual("active");
    expect(screen.getByText("5").getAttribute("class")).toEqual("");
  });

  test("number of items", () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination
          currentPage={3}
          pagePath="example/"
          totalPages={20}
          numOfItems={9}
        />
      </BrowserRouter>
    );
    expect(container.querySelectorAll("li")).toHaveLength(9);
    expect(container.querySelectorAll("a")).toHaveLength(9);
  });

  test("total page number", () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination
          currentPage={9}
          pagePath="another_type/"
          totalPages={26}
          numOfItems={9}
        />
      </BrowserRouter>
    );
    expect(container.querySelectorAll("li")[9].innerHTML).toEqual(
      '<span>...</span><a href="/another_type/page/26">26</a>'
    );
  });
});
