import * as constants from "./constants";

const initial = {
  tags: [],
  failure: false,
  loading: false,
  selectedTags: [],
  error_message: "",
};
export function reducers(state = initial, action) {
  switch (action.type) {
    case constants.SET_TAGS:
    case constants.TAGS_FAILURE:
    case constants.TAGS_LOADING:
    case constants.SET_SELECTED_TAGS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
