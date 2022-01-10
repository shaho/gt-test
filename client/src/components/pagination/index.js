import { Link } from "react-router-dom";

import { getPagePath, generatePaginationList } from "../../utils";
import { Pages } from "./styles";

function Pagination({
  currentPage = 1,
  pagePath = "/",
  totalPages = 1,
  numOfItems = 8,
}) {
  if (totalPages < 2) return null;
  const numOfItemsEachSide = Math.ceil(numOfItems / 2);
  return (
    <Pages>
      {/* previous button */}
      {currentPage !== 1 && (
        <li>
          <Link to={getPagePath(currentPage - 1, pagePath)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0667786 7.33281C0.110539 7.43791 0.171804 7.53425 0.259324 7.61308L6.38574 13.7438C6.72707 14.0854 7.27844 14.0854 7.61977 13.7438C7.9611 13.4023 7.9611 12.8505 7.61977 12.5089L2.98995 7.87582L13.1248 7.87582C13.6062 7.87582 14 7.4817 14 7C14 6.5183 13.6062 6.12418 13.1248 6.12418L2.9812 6.12418L7.61102 1.49109C7.95235 1.14951 7.95235 0.597748 7.61102 0.256178C7.26969 -0.0853924 6.71832 -0.0853923 6.37699 0.256178L0.250571 6.38693C0.171802 6.46575 0.110537 6.56209 0.0580247 6.66719C-0.020744 6.87739 -0.0207421 7.12262 0.0667786 7.33281Z"
              />
            </svg>
            <span>Prev</span>
          </Link>
        </li>
      )}
      {/* first page link */}
      {currentPage >= numOfItemsEachSide && (
        <li>
          <Link to={getPagePath(1, pagePath)}>1</Link>
          {currentPage !== numOfItemsEachSide && <span>...</span>}
        </li>
      )}
      {/* pages links */}
      {generatePaginationList(
        currentPage,
        numOfItemsEachSide,
        totalPages,
        pagePath
      )}
      {/* last page link */}
      {totalPages - currentPage >= numOfItemsEachSide - 1 && (
        <li>
          {totalPages - currentPage !== numOfItemsEachSide - 1 && (
            <span>...</span>
          )}
          <Link to={getPagePath(totalPages, pagePath)}>{totalPages}</Link>
        </li>
      )}
      {/* next button */}
      {currentPage < totalPages && (
        <li>
          <Link to={getPagePath(currentPage + 1, pagePath)}>
            <span>Next</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9332 6.66719C13.8895 6.56209 13.8282 6.46575 13.7407 6.38692L7.61426 0.256176C7.27293 -0.0853938 6.72156 -0.0853937 6.38023 0.256177C6.0389 0.597747 6.0389 1.14951 6.38023 1.49108L11.01 6.12418L0.875203 6.12418C0.393842 6.12418 1.1397e-06 6.5183 1.22392e-06 7C1.30814e-06 7.4817 0.393842 7.87582 0.875204 7.87582L11.0188 7.87582L6.38898 12.5089C6.04765 12.8505 6.04765 13.4023 6.38898 13.7438C6.73031 14.0854 7.28169 14.0854 7.62301 13.7438L13.7494 7.61307C13.8282 7.53425 13.8895 7.43791 13.942 7.33281C14.0207 7.12261 14.0207 6.87738 13.9332 6.66719Z"
              />
            </svg>
          </Link>
        </li>
      )}
    </Pages>
  );
}

export default Pagination;
