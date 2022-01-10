export const sortTypes = {
  PriceLowToHigh: {
    query: "&_sort=price&_order=asc",
    title: "Price low to high",
  },
  PriceHighToLow: {
    query: "&_sort=price&_order=desc",
    title: "Price high to low",
  },
  NewToOld: {
    query: "&_sort=added&_order=asc",
    title: "New to old",
  },
  OldToNew: {
    query: "&_sort=added&_order=desc",
    title: "Old to new",
  },
};
