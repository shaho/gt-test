import * as constants from "./constants";

export const setSelectedTags = (selectedTags) => ({
  type: constants.SET_SELECTED_TAGS,
  payload: {
    selectedTags,
  },
});

export const getTags = () => ({
  type: constants.GET_TAGS,
  payload: {},
});

export const setTags = (tags) => ({
  type: constants.SET_TAGS,
  payload: {
    tags,
  },
});

export const failure = (failure, error_message) => ({
  type: constants.TAGS_FAILURE,
  payload: {
    failure,
    error_message,
  },
});

export const loading = (loading) => ({
  type: constants.TAGS_LOADING,
  payload: {
    loading,
  },
});

export const filterByTags = (selectedTags) => ({
  type: constants.FILTER_BY_TAGS,
  payload: {
    selectedTags,
  },
});
