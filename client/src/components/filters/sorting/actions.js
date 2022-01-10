import * as constants from "./constants";

export const setSort = (selectedOrder) => ({
  type: constants.SET_SELECTED_SORT,
  payload: {
    selectedOrder,
  },
});

export const sort = (selectedOrder) => ({
  type: constants.SORT,
  payload: {
    selectedOrder,
  },
});