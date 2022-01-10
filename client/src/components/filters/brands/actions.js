import * as constants from "./constants";

export const setSelectedBrands = (selectedBrands) => ({
  type: constants.SET_SELECTED_BRANDS,
  payload: {
    selectedBrands,
  },
});

export const getBrands = () => ({
  type: constants.GET_BRANDS,
  payload: {},
});

export const setBrands = (brands) => ({
  type: constants.SET_BRANDS,
  payload: {
    brands,
  },
});

export const failure = (failure, error_message) => ({
  type: constants.BRANDS_FAILURE,
  payload: {
    failure,
    error_message,
  },
});

export const loading = (loading) => ({
  type: constants.BRANDS_LOADING,
  payload: {
    loading,
  },
});

export const filterByBrands = (selectedBrands) => ({
  type: constants.FILTER_BY_BRANDS,
  payload: {
    selectedBrands,
  },
});
