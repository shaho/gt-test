import * as constants from "./constants";

export const getList = (start, end) => ({
  type: constants.GET,
  payload: {
    start,
    end,
  },
});

export const setList = (list, totalItems) => ({
  type: constants.SET,
  payload: {
    list,
    totalItems,
  },
});

export const failure = (failure, error_message) => ({
  type: constants.FAILURE,
  payload: {
    failure,
    error_message,
  },
});

export const loading = (loading) => ({
  type: constants.LOADING,
  payload: {
    loading,
  },
});
