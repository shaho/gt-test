import * as constants from "./constants";

const initial = {
  list: [],
  failure: false,
  loading: false,
  error_message: "",
  totalItems: 0,
};
export function reducers(state = initial, action) {
  switch (action.type) {
    case constants.SET:
    case constants.FAILURE:
    case constants.LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
