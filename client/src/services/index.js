import axios from "axios";

import { sortTypes } from "../components/filters/sorting/types";

axios.defaults.baseURL = process.env.REACT_APP_BASE_APT_URL;
const ITEM_PER_PAGE = Number(process.env.REACT_APP_ITEM_PER_PAGE);

export function getItems({
  start = 0,
  end = ITEM_PER_PAGE,
  tags = [],
  brands = [],
  itemType = "",
  sortOrder = "",
}) {
  let query = `/items?_start=${start}&_end=${end}`;
  // Tags
  if (tags.length) {
    tags.forEach((tag) => {
      query += `&tags_like=${tag}`;
    });
  }
  // Brands
  if (brands.length) {
    brands.forEach((brand) => {
      query += `&manufacturer_like=${brand}`;
    });
  }
  // Item Type
  if (itemType) {
    query += `&itemType_like=${itemType}`;
  }
  // sort
  if (sortOrder) {
    query += sortTypes[sortOrder].query;
  }
  return axios.get(query).catch((error) => {
    throw error;
  });
}

export function getBrands() {
  return axios.get("/brands").catch((error) => {
    throw error;
  });
}

export function getTags() {
  return axios.get("/tags").catch((error) => {
    throw error;
  });
}
