import * as constants from "./constants";

export const setSelectedType = (selectedType) => ({
  type: constants.SET_SELECTED_TYPE,
  payload: {
    selectedType,
  },
});

export const filterByType = (selectedType) => ({
  type: constants.FILTER_BY_TYPE,
  payload: {
    selectedType,
  },
});
