import { Link } from "react-router-dom";

export function CalculateTotalAmount(array) {
  let amount = 0;
  if (array.length > 0) {
    array.forEach((element) => {
      amount += element.count * element.price;
    });
  }
  return amount.toFixed(2);
}

export function addItem(array, item) {
  const newArr = [...array];
  const hasItem = newArr.findIndex((e) => e.slug === item.slug);
  if (hasItem === -1) {
    newArr.push({ ...item, count: 1 });
  } else {
    newArr[hasItem].count += 1;
  }
  return newArr;
}

export function removeItem(array, item) {
  const newArr = [...array];
  const hasItem = newArr.findIndex((e) => e.slug === item.slug);
  newArr[hasItem].count -= 1;
  const output = newArr.filter((item) => item.count > 0);
  return output;
}

export function toggleToArray(array, item) {
  const newArr = [...array];
  const hasItem = newArr.findIndex((e) => e === item);
  if (hasItem === -1) {
    newArr.push(item);
    return newArr;
  } else {
    const output = newArr.filter((e) => e !== item);
    return output;
  }
}

export function addSelectedProp(array, selectedArray) {
  const obj = {};
  const output = [...array];

  if (selectedArray.length > 0) {
    selectedArray.forEach((item) => {
      obj[item] = item;
    });
  }
  output.forEach((item) => {
    item.selected = item.slug === obj[item.slug];
  });

  return output;
}

export function CalculateFromNTo(
  currentPage = 1,
  totalCount,
  itemPerPage = Number(process.env.REACT_APP_ITEM_PER_PAGE)
) {
  const current = currentPage;
  let totalPageCount = Math.ceil(totalCount / itemPerPage);
  let from = 0;
  let to = itemPerPage;
  if (!current || current < 2) {
    return { from, to, totalPageCount };
  }
  from = (current - 1) * itemPerPage;
  to = from + itemPerPage;
  return { from, to, totalPageCount };
}

export function getPagePath(index, pagePath) {
  return index === 1 ? pagePath : `${pagePath}page/${index}`;
}

export function generatePaginationList(
  currentPage,
  numOfItemsEachSide,
  totalPages,
  pagePath
) {
  const pages = [];
  // Generate list of page numbers before and after
  for (
    let i = currentPage - (numOfItemsEachSide - 2);
    i < currentPage + (numOfItemsEachSide - 1);
    i += 1
  )
    if (i > 0) {
      if (i <= totalPages) {
        pages.push(
          <li key={i}>
            <Link
              className={i === currentPage ? "active" : ""}
              to={getPagePath(i, pagePath)}
            >
              {i}
            </Link>
          </li>
        );
      }
    }
  return pages;
}
